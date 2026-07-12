import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardFooter, CardHeader, Col } from "reactstrap";
import { H3, H4, H6, Image, LI, UL } from "../../../../AbstractElements";
import { UserCardApi } from "../../../../api";

const AllCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(UserCardApi).then((res) => setCards(res.data));
  }, []);
  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };
  return (
    <Fragment>
      {cards.map((item) => {
        return (
          <Col md="6" xl="4" lg="12" className="box-col-6" key={item.id}>
            <Card className="custom-card">
              <CardHeader className="p-0">
                <Image attrImage={{ src: `${dynamicImage(item.card_bg)}`, className: "img-fluid", alt: "" }} />
              </CardHeader>
              <div className="card-profile">
                <Image attrImage={{ src: `${dynamicImage(item.avatar)}`, className: "rounded-circle", alt: "" }} />
              </div>
              <UL attrUL={{ as: "ul", className: "simple-list card-social list-group" }}>
                <LI>
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </LI>
                <LI>
                  <a href="https://accounts.google.com/">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </LI>
                <LI>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </LI>
                <LI>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </LI>
                <LI>
                  <a href="https://dashboard.rss.com/auth/sign-in/">
                    <i className="fa fa-rss"></i>
                  </a>
                </LI>
              </UL>
              <Link to={`/app/users/userprofile`}>
                <div className="text-center profile-details">
                  <H4>{item.name}</H4>
                  <H6>{item.post}</H6>
                </div>
              </Link>
              <CardFooter className="row">
                <Col sm="4" className="col-4">
                  <H6>Follower</H6>
                  <H3 attrH3={{ className: "counter" }}>{item.follower}</H3>
                </Col>
                <Col sm="4" className="col-4">
                  <H6>Following</H6>
                  <H3>
                    <span className="counter">{item.following}</span>K
                  </H3>
                </Col>
                <Col sm="4" className="col-4">
                  <H6>Total Post</H6>
                  <H3>
                    <span className="counter">{item.totalPost}</span>M
                  </H3>
                </Col>
              </CardFooter>
            </Card>
          </Col>
        );
      })}
    </Fragment>
  );
};
export default AllCards;
