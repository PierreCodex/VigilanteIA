import { TourGuideClient } from "@sjmc11/tourguidejs";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import LeftbarProfile from "./Leftbar";
import PostFirst from "./PostFirst";
import PostSecond from "./PostSecond";
import PostThird from "./PostThird";
import UserProfile from "./UserProfile";

const steps = [
  {
    target: ".step1",
    content: "This is Profile image",
  },
  {
    target: ".step2",
    content: "Change Profile image here",
  },
  {
    target: ".step3",
    content: "This is your Social details",
  },
  {
    target: ".step4",
    content: "This is your Your detail",
  },
  {
    target: ".step5",
    content: "This is the your first Post",
  },
  {
    target: ".step6",
    content: "This is the your Last Post",
  },
];

const Tours = () => {
  const tourRef = useRef(null);
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    try {
      tourRef.current = new TourGuideClient({ steps: steps });
    } catch (error) {
      toast.error("Error initializing TourGuideClient:" + error);
    }

    return () => tourRef.current?.destroy?.();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTourOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTourOpen) tourRef.current?.start?.();
  }, [isTourOpen]);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Tour" parent="Bouns Ui" title="Tour" />

      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            {/* <!-- user profile header start--> */}
            <UserProfile step={steps} />
            {/* <!-- user profile header end--> */}
            <div className="col-xl-3 col-lg-12 col-md-5 xl-35">
              <LeftbarProfile colClass="col-xl-12 col-lg-6 col-md-12 col-sm-6" />
            </div>
            <Col xl="9" lg="12" md="7" className="xl-65">
              <Row>
                {/* <!-- profile post start--> */}
                <PostFirst />
                {/* <!-- profile post end-->
                <!-- profile post start--> */}
                <PostSecond />
                {/* <!-- profile post end   -->
                <!-- profile post start--> */}
                <PostThird />
                {/* <!-- profile post end --> */}
              </Row>
            </Col>
            {/* <!-- user profile fifth-style end--> */}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Tours;
