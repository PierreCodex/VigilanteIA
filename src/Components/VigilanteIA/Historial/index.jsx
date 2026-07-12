import React, { Fragment, useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { Breadcrumbs, H4, H5, P } from "../../../AbstractElements";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import Chart from "react-apexcharts";
import { toast } from "react-toastify";
import { getEventos, mensajeDeError } from "../../../api/vigilanteApi";

const formatearFecha = (iso) =>
  new Date(iso).toLocaleString("es-PE", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

const TIPO_COLORS = {
  auditoria: "info",
  discrepancia: "danger",
};

const Historial = () => {
  const [skuFiltro, setSkuFiltro] = useState("");
  const [desde, setDesde] = useState(null);
  const [hasta, setHasta] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Los filtros los aplica el BACKEND (query params de /eventos); acá solo se piden.
  useEffect(() => {
    const cargar = async () => {
      setCargando(true);
      try {
        const inicioDia = desde ? new Date(new Date(desde).setHours(0, 0, 0, 0)) : null;
        const finDia = hasta ? new Date(new Date(hasta).setHours(23, 59, 59, 999)) : null;
        const data = await getEventos({
          sku: skuFiltro || undefined,
          desde: inicioDia ? inicioDia.toISOString() : undefined,
          hasta: finDia ? finDia.toISOString() : undefined,
        });
        setEventos(data.eventos);
      } catch (error) {
        toast.error(mensajeDeError(error));
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, [skuFiltro, desde, hasta]);

  const eventosFiltrados = eventos;

  // Opciones del filtro de producto: todas las etiquetas vistas en los eventos.
  const skusDisponibles = useMemo(() => {
    const nombres = eventos.flatMap((e) => [
      ...(e.conteo?.productos_detectados || []).map((p) => p.nombre),
      ...(e.faltantes || []),
    ]);
    return [...new Set(nombres.filter((n) => n && n !== "producto_no_ubicado"))];
  }, [eventos]);

  const columns = [
    {
      name: "Hora",
      selector: (row) => formatearFecha(row.timestamp),
      sortable: true,
      wrap: true,
    },
    {
      name: "Tipo",
      selector: (row) => row.tipo,
      cell: (row) => (
        <Badge color={TIPO_COLORS[row.tipo] || "secondary"}>
          {row.tipo === "auditoria" ? "Auditoría" : "Discrepancia"}
        </Badge>
      ),
      sortable: true,
    },
    {
      name: "Producto",
      selector: (row) =>
        row.tipo === "discrepancia"
          ? row.sku
          : row.faltantes?.join(", ") || "—",
      sortable: true,
      wrap: true,
    },
    {
      name: "Detalle",
      selector: (row) =>
        row.tipo === "discrepancia"
          ? row.detalle
          : `Origen ${row.origen} — total ${row.conteo.cantidad_total}`,
      sortable: true,
      wrap: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado || "—",
      cell: (row) =>
        row.estado ? (
          <Badge
            color={row.estado === "pendiente" ? "warning" : "success"}
            pill
          >
            {row.estado}
          </Badge>
        ) : (
          "—"
        ),
      sortable: true,
    },
  ];

  const conditionalRowStyles = [
    {
      when: (row) => row.tipo === "discrepancia",
      style: {
        backgroundColor: "rgba(220, 53, 69, 0.08)",
        color: "#842029",
      },
    },
  ];

  const datosGrafico = useMemo(() => {
    const auditorias = eventosFiltrados
      .filter((e) => e.tipo === "auditoria")
      .slice()
      .reverse();
    return {
      series: [
        {
          name: "Conteo total",
          data: auditorias.map((e) => e.conteo.cantidad_total),
        },
      ],
      options: {
        chart: { toolbar: { show: false }, zoom: { enabled: false } },
        xaxis: {
          categories: auditorias.map((e) =>
            new Date(e.timestamp).toLocaleTimeString("es-PE", {
              hour: "2-digit",
              minute: "2-digit",
            })
          ),
        },
        colors: ["#0d6efd"],
        stroke: { curve: "smooth" },
        dataLabels: { enabled: false },
      },
    };
  }, [eventosFiltrados]);

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Historial"
        parent="VigilanteIA"
        title="Historial"
      />
      <Container fluid={true}>
        <Row className="g-3">
          <Col xs="12">
            <H4 attrH4={{ className: "mb-0" }}>Historial de eventos</H4>
            <P attrPara={{ className: "text-muted small" }}>
              Revisa auditorías automáticas y discrepancias detectadas.
            </P>
          </Col>

          <Col xs="12">
            <Card>
              <CardBody>
                <Row className="g-2 align-items-end">
                  <Col xs="12" md="4" lg="3">
                    <FormGroup className="mb-0">
                      <Label for="sku-filter" className="small">
                        Producto
                      </Label>
                      <Input
                        id="sku-filter"
                        type="select"
                        value={skuFiltro}
                        onChange={(e) => setSkuFiltro(e.target.value)}
                      >
                        <option value="">Todos</option>
                        {skusDisponibles.map((sku) => (
                          <option key={sku} value={sku}>
                            {sku}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="6" md="3" lg="2">
                    <FormGroup className="mb-0">
                      <Label className="small">Desde</Label>
                      <DatePicker
                        selected={desde}
                        onChange={setDesde}
                        className="form-control"
                        placeholderText="dd/mm/aaaa"
                        dateFormat="dd/MM/yyyy"
                        isClearable
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6" md="3" lg="2">
                    <FormGroup className="mb-0">
                      <Label className="small">Hasta</Label>
                      <DatePicker
                        selected={hasta}
                        onChange={setHasta}
                        className="form-control"
                        placeholderText="dd/mm/aaaa"
                        dateFormat="dd/MM/yyyy"
                        isClearable
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg={eventosFiltrados.some((e) => e.tipo === "auditoria") ? 8 : 12}>
            <Card>
              <CardHeader>
                <H5 attrH5={{ className: "mb-0" }}>Eventos ({eventosFiltrados.length})</H5>
              </CardHeader>
              <CardBody>
                <DataTable
                  data={eventosFiltrados}
                  columns={columns}
                  pagination
                  paginationPerPage={10}
                  paginationRowsPerPageOptions={[10, 20, 30]}
                  striped
                  highlightOnHover
                  progressPending={cargando}
                  progressComponent={<div className="py-4">Cargando eventos…</div>}
                  conditionalRowStyles={conditionalRowStyles}
                  noDataComponent="No hay eventos para los filtros elegidos"
                />
              </CardBody>
            </Card>
          </Col>

          {eventosFiltrados.some((e) => e.tipo === "auditoria") && (
            <Col xs="12" lg="4">
              <Card>
                <CardHeader>
                  <H5 attrH5={{ className: "mb-0" }}>Evolución del conteo</H5>
                </CardHeader>
                <CardBody>
                  <Chart
                    options={datosGrafico.options}
                    series={datosGrafico.series}
                    type="line"
                    height={280}
                  />
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Historial;
