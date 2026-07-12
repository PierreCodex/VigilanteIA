import { Fragment, useState } from "react";
import { HelpCircle } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Row } from "reactstrap";
import HeaderCard from "../Common/Component/HeaderCard";
import FaqRightsidebae from "./FaqRightside";

const Questionss = () => {
  const [isCollaps, setIsCollaps] = useState(false);
  const [isCollaps1, setIsCollaps1] = useState(false);
  const [isCollaps2, setIsCollaps2] = useState(false);
  const [isCollaps3, setIsCollaps3] = useState(false);
  const [isCollaps4, setIsCollaps4] = useState(false);
  const [isCollaps5, setIsCollaps5] = useState(false);
  const [isCollaps6, setIsCollaps6] = useState(false);
  const [isCollaps7, setIsCollaps7] = useState(false);
  const [isCollaps8, setIsCollaps8] = useState(false);
  const [isCollaps9, setIsCollaps9] = useState(false);
  const [isCollaps10, setIsCollaps10] = useState(false);
  const [isCollaps11, setIsCollaps11] = useState(false);
  const [isCollaps12, setIsCollaps12] = useState(false);
  const [isCollaps13, setIsCollaps13] = useState(false);
  const [isCollaps14, setIsCollaps14] = useState(false);
  const [isCollaps15, setIsCollaps15] = useState(false);

  return (
    <Fragment>
      <Col lg="12" className="header-faq">
        <HeaderCard title={"Quick Questions are answered"} />
        <Row className="row default-according style-1 faq-accordion" id="accordionoc">
          <Col xl="8" lg="6" md="7" className="box-col-8 xl-60">
            <Row className="default-according style-1 faq-accordion" id="accordionoc">
              <div className="col-xl-12 xl-60 col-lg-6 col-md-7">
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps(!isCollaps)}
                        aria-expanded={isCollaps}
                        aria-controls="collapseicon"
                      >
                        <HelpCircle />
                        Integrating WordPress with Your Website?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps}>
                    <CardBody>
                      How you approach this process will depend on which web host you use. For example, a lot of hosting
                      providers use cPanel, which includes an option to set up subdomains with just a few clicks.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps1(!isCollaps1)}
                        aria-expanded={isCollaps1}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle /> WordPress Site Maintenance ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps1}>
                    <CardBody>
                      We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a
                      hurry, here’s a quick solution.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps2(!isCollaps2)}
                        aria-expanded={isCollaps2}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle />
                        Meta Tags in WordPress ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps2}>
                    <CardBody>
                      Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example
                      from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their
                      animal stories on WordPress.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps3(!isCollaps3)}
                        aria-expanded={isCollaps3}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle /> WordPress in Your Language ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps3}>
                    <CardBody>
                      As of version 4.0, you can have WordPress automatically install the language of your choice during
                      the installation process.
                    </CardBody>
                  </Collapse>
                </Card>
                <div className="faq-title">
                  <h6>Intellectual Property</h6>
                </div>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps4(!isCollaps4)}
                        aria-expanded={isCollaps4}
                      >
                        <HelpCircle /> WordPress Site Maintenance ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps4}>
                    <CardBody>
                      We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a
                      hurry, here’s a quick solution.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps5(!isCollaps5)}
                        aria-expanded={isCollaps5}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle /> WordPress in Your Language ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps5}>
                    <CardBody>
                      As of version 4.0, you can have WordPress automatically install the language of your choice during
                      the installation process.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps6(!isCollaps6)}
                        aria-expanded={isCollaps6}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle /> Integrating WordPress with Your Website ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps6}>
                    <CardBody>
                      How you approach this process will depend on which web host you use. For example, a lot of hosting
                      providers use cPanel, which includes an option to set up subdomains with just a few clicks.
                    </CardBody>
                  </Collapse>
                </Card>
                <div className="faq-title">
                  <h6>Selling And Buying</h6>
                </div>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps7(!isCollaps7)}
                        aria-expanded={isCollaps7}
                      >
                        <HelpCircle /> WordPress Site Maintenance ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps7}>
                    <CardBody>
                      We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a
                      hurry, here’s a quick solution.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps8(!isCollaps8)}
                        aria-expanded={isCollaps8}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle />
                        Meta Tags in WordPress ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps8}>
                    <CardBody>
                      Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example
                      from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their
                      animal stories on WordPress.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps9(!isCollaps9)}
                        aria-expanded={isCollaps9}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle />
                        Validating a Website ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps9}>
                    <CardBody>
                      Validating a website is the process of ensuring that the pages on the website conform to the norms
                      or standards defined by various organizations.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps10(!isCollaps10)}
                        aria-expanded={isCollaps10}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle />
                        Know Your Sources ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps10}>
                    <CardBody>
                      A book or set of books giving information on many subjects or on many aspects of one subject. Some
                      are intended as an entry point into research for a general audience, some provide detailed
                      information.
                    </CardBody>
                  </Collapse>
                </Card>
                <div className="faq-title">
                  <h6>User Accounts</h6>
                </div>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps11(!isCollaps11)}
                        aria-expanded={isCollaps11}
                      >
                        <HelpCircle />
                        Integrating WordPress with Your Website ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps11}>
                    <CardBody>
                      How you approach this process will depend on which web host you use. For example, a lot of hosting
                      providers use cPanel, which includes an option to set up subdomains with just a few clicks.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps12(!isCollaps12)}
                        aria-expanded={isCollaps12}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle />
                        WordPress Site Maintenance ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps12}>
                    <CardBody>
                      We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a
                      hurry, here’s a quick solution.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps13(!isCollaps13)}
                        aria-expanded={isCollaps13}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle /> WordPress in Your Language ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps13}>
                    <CardBody>
                      As of version 4.0, you can have WordPress automatically install the language of your choice during
                      the installation process.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps14(!isCollaps14)}
                        aria-expanded={isCollaps14}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle /> Validating a Website ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps14}>
                    <CardBody>
                      Validating a website is the process of ensuring that the pages on the website conform to the norms
                      or standards defined by various organizations.
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button
                        color="btn btn-link collapsed ps-0"
                        onClick={() => setIsCollaps15(!isCollaps15)}
                        aria-expanded={isCollaps15}
                        aria-controls="collapseicon2"
                      >
                        <HelpCircle />
                        Meta Tags in WordPress ?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isCollaps15}>
                    <CardBody>
                      Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example
                      from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their
                      animal stories on WordPress.
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </Row>
          </Col>
          <FaqRightsidebae />
        </Row>
      </Col>
    </Fragment>
  );
};
export default Questionss;
