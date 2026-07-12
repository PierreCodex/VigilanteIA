import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { Fragment, useEffect } from "react";
import { Col } from "reactstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { P } from "../../../../AbstractElements";
import { initialstate } from "./DragData";

const DragCalendar = () => {
  const state = initialstate;
  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);
  const eventClick = (eventClick) => {
    Swal.fire({
      title: eventClick.event.title,
      html:
        `<div className="table-responsive">
                <table className="table">
                <tbody>
                <tr >
                <td>Title</td>
                <td><strong>` +
        eventClick.event.title +
        `</strong></td>
                </tr>
                <tr >
                <td>Start Time</td>
                <td><strong> ` +
        eventClick.event.start +
        ` </strong></td>
                </tr>
                </tbody>
                </table>
                </div>`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove();
        Swal.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };
  return (
    <Fragment>
      <Col xl={3} md={4}>
        <div id="external-events">
          <P attrPara={{ align: "center" }}>
            <strong> {"Events"}</strong>
          </P>
          {state.events.map((event) => (
            <div className="fc-event" title={event.title} data={event.id} key={event.id}>
              {event.title}
            </div>
          ))}
        </div>
      </Col>
      <Col xl={9} md={8}>
        <div className="demo-app-calendar" id="mycalendartest">
          <FullCalendar rerenderDelay={10} eventDurationEditable={false} editable={true} droppable={true} plugins={[dayGridPlugin, interactionPlugin]} weekends={state.calendarWeekends} events={state.calendarEvents} eventClick={eventClick} />
        </div>
      </Col>
    </Fragment>
  );
};
export default DragCalendar;
