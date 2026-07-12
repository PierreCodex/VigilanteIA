import React, { Fragment, useMemo, useState } from "react";
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
import { historialEventos, skusDisponibles } from "../../../Data/Vigilante";

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

  const eventosFiltrados = useMemo(() => {
    return historialEventos.eventos.filter((ev) => {
      const coincideSku =
        skuFiltro === "" ||
        (ev.tipo === "discrepancia" && ev.sku === skuFiltro) ||
        (ev.tipo === "auditoria" && ev.faltantes?.includes(skuFiltro));
      const fecha = new Date(ev.timestamp);
      const coincideDesde = !desde || fecha >= new Date(desde).setHours(0, 0, 0, 0);
      const coincideHasta =
        !hasta || fecha <= new Date(hasta).setHours(23, 59, 59, 999);
      return coincideSku && coincideDesde && coincideHasta;
    });
  }, [skuFiltro, desde, hasta]);

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
