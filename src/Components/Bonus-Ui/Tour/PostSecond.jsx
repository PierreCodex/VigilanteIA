import React from "react";
import { Row, Col, Card } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import PostHeader from "./Common/PostHeader";
import PostReact from "./Common/PostReact";
import SocialIcon from "./Common/SocialIcons";

const PostSecond = () => {
  return (
    <Col sm="12" data-intro="This is the your Last Post" className="step6">
      <Card>
        <div className="profile-post">
          <PostHeader h6="5 Hours ago" />
          <div className="post-body">
            <div className="img-container">
              <Row className="row mt-4 pictures my-gallery" id="aniimated-thumbnials-2" itemScope="">
                <figure className="col-sm-6" itemProp="associatedMedia" itemScope="">
                  <a href={('/src/assets/images/user-profile/post2.jpg')} itemProp="contentUrl" data-size="1600x950">
                    <Image attrImage={{ className: "img-fluid rounded", src: `${('/src/assets/images/user-profile/post2.jpg')}`, itemProp: "thumbnail", alt: "gallery" }} />
                  </a>
                  <figcaption itemProp="caption description">Image caption  1</figcaption>
                </figure>
                <figure className="col-sm-6" itemProp="associatedMedia" itemScope="">
                  <a href={('/src/assets/images/user-profile/post3.jpg')} itemProp="contentUrl" data-size="1600x950">
                    <Image attrImage={{ className: "img-fluid rounded", src: `${('/src/assets/images/user-profile/post3.jpg')}`, itemProp: "thumbnail", alt: "gallery" }} /></a>
                  <figcaption itemProp="caption description">Image caption  2</figcaption>
                </figure>
              </Row>
            </div>
            <PostReact h6="+25 people react this post" />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default PostSecond;