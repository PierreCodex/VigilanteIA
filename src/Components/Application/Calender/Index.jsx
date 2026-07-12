import { BasicCalendars } from "../../../Constant";
import HeaderCard from "../../Common/Component/HeaderCard";
import { Breadcrumbs } from "../../../AbstractElements";
import { myEventsList } from "./Events";
import React, { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { toast } from "react-toastify";

const CalenderContain = () => {
  const calendarEvents = myEventsList.map((event) => ({
    id: event.id.toString(),
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay || false,
  }));
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Calender" parent="Apps" title="Calender" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={BasicCalendars} />
              <CardBody>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                  }}
                  events={calendarEvents}
                  selectable
                  dateClick={(info) => toast.info(`Clicked on: ${info.dateStr}`)}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CalenderContain;
