import React, { Fragment } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Breadcrumbs, H4, Image, P } from "../../../AbstractElements";

const Timeline1 = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Timeline" parent="Bonus Ui" title="Timeline" />
      <Card>
        <CardHeader className="pb-0">
          <h5> Timeline </h5>
        </CardHeader>
        <CardBody>
          <section className="cd-container" id="cd-timeline">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture bg-primary">
                <i className="icon-pencil-alt" />
              </div>
              <div className="cd-timeline-content">
                <H4>{"Title of section 1"}</H4>
                <P className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</P>
                <span className="cd-date">
                  Jan <span className="counter digits"> 14</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie bg-secondary">
                <i className="icon-video-camera" />
              </div>
              <div className="cd-timeline-content">
                <H4>{"Title of section 2"}</H4>
                <div className="embed-responsive embed-responsive-21by9 m-t-20">
                  <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen title="youtube" />
                </div>
                <span className="cd-date">
                  Jan <span className="counter digits">18</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture bg-success">
                <i className="icon-image" />
              </div>
              <div className="cd-timeline-content">
                <H4>{"Title of section 3"}</H4>
                <Image attrImage={{ className: "img-fluid P-t-20", src: `${("/src/assets/images/banner/1.jpg")}`, alt: "timelineImg1" }} />
                <span className="cd-date">
                  Jan <span className="counter digits">24</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location bg-info">
                <i className="icon-pulse" />
              </div>
              <div className="cd-timeline-content">
                <H4>{"Title of section 4"}</H4>
                <audio className="m-t-20" controls>
                  <source src={("../../../assets/audio/horse.ogg")} type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
                <span className="cd-date">
                  Feb <span className="counter digits">14</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location bg-warning">
                <i className="icon-image" />
              </div>
              <div className="cd-timeline-content">
                <H4>{"Title of section 5"}</H4>
                <Image attrImage={{ className: "img-fluid P-t-20", src: `${("/src/assets/images/banner/3.jpg")}`, alt: "timelineImg2" }} />
                <span className="cd-date">
                  Feb <span className="counter digits">18</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie bg-danger">
                <i className="icon-pencil-alt" />
              </div>
              <div className="cd-timeline-content">
                <H4>Final Section</H4>
                <P className="m-0">This is the content of the last section</P>
                <span className="cd-date">
                  Feb <span className="counter digits">26</span>
                </span>
              </div>
            </div>
          </section>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default Timeline1;
