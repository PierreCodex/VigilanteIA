import React, { Fragment } from 'react';
import { Col, Card } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import PostHeader from './Common/PostHeader';
import PostReact from './Common/PostReact';
import SocialIcon from './Common/SocialIcons';

const PostFirst = () => {
  return (
    <Fragment>
      <Col sm="12" data-intro="This is the your first Post" className="step5">
        <Card>
          <div className="profile-post">
            <PostHeader h6="22 Hours ago" />
            <div className="post-body">
              <div className="img-container">
                <div className="my-gallery" id="aniimated-thumbnials" itemScope="">
                  <figure itemProp="associatedMedia" itemScope="">
                    <a href="../assets/images/user-profile/post1.jpg" itemProp="contentUrl" data-size="1600x950">
                      <Image attrImage={{ className: 'img-fluid rounded', src: `${('/src/assets/images/user-profile/post1.jpg')}`, itemProp: 'thumbnail', alt: 'gallery' }} />
                    </a>
                    <figcaption itemProp="caption description">Image caption  1</figcaption>
                  </figure>
                </div>
              </div>
              <PostReact h6={'+5 people react this post'} />
              <SocialIcon />
            </div>
          </div>
        </Card>
      </Col>
    </Fragment >
  );
};

export default PostFirst;