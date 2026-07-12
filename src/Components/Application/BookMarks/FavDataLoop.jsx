import React, { Fragment, useContext, useState } from 'react';
import { NoBookmarksFound } from '../../../Constant';
import { Row, Card, Col, } from 'reactstrap';
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import SweetAlert from 'sweetalert2';
import BookmarkContext from '../../../_helper/Bookmark';
import { H6, LI, P, UL, Image } from '../../../AbstractElements';

const FavDataLoop = () => {
    const { mybookmarkData, removemybookmark, updatebookmark, } = useContext(BookmarkContext);
    const [editModal, seteditModal] = useState(false);
    const Remove_from_favourite = (data) => {
        if (data.fillstar === true) {
            data.fillstar = false;
            removemybookmark(data.id);
            updatebookmark(data.id, data, data.image);
        }
    };
    const editToggle = () => {
        seteditModal(!editModal);
    };

    const editbookmarkdata = (data) => {
        editToggle();
    };
    const Remove_from_my_bookmark = (mybookmarkId) => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'cancel',
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                removemybookmark(mybookmarkId);
                SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
            } else {
                SweetAlert.fire('Your imaginary file is safe!');
            }
        });
    };
    return (
        <Fragment>
            <Row>
                {mybookmarkData.length > 0 ? (
                    mybookmarkData.map((mybookdata) => {
                        return (
                            <Col xl="3" className='xl-50' md="4" key={mybookdata.id}>
                                <Card className="card-with-border bookmark-card o-hidden">
                                    <div className="details-website">
                                        <Image attrImage={{ className: 'img-fluid', src: `${(`/src/assets/images/${mybookdata.image}`)}`, alt: '' }} />
                                        <div className={`favourite-icon ${mybookdata.fillstar ? 'favourite' : ''}`}>
                                            <a href="#javascript"><i className="fa fa-star" onClick={() => Remove_from_favourite(mybookdata)} ></i></a>
                                        </div>
                                        <div className="desciption-data">
                                            <div className="title-bookmark">
                                                <H6>{mybookdata.title}</H6>
                                                <P>{mybookdata.website_url}</P>
                                                <div className="hover-block">
                                                    <UL attrUL={{ className: 'simple-list flex-row' }}>
                                                        <LI><a href="#javascript" onClick={() => editbookmarkdata(
                                                            mybookdata)}><Edit2 /></a> </LI>
                                                        <LI><a href="#javascript"> <Link /></a></LI>
                                                        <LI><a href="#javascript"><Share2 /></a></LI>
                                                        <LI><a href="#javascript" onCLIck={() => Remove_from_my_bookmark(mybookdata.id)}><Trash2 /></a>
                                                        </LI>
                                                        <LI className="pull-right text-end"> <a href="#javascript">
                                                            <Tag /></a></LI>
                                                    </UL>
                                                </div>
                                                <div className="content-general">
                                                    <P>{mybookdata.desc}</P>
                                                    <span>{mybookdata.collection}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })
                ) : (<div className="no-favourite"><span>{NoBookmarksFound}</span></div>)}
            </Row>
        </Fragment>
    );
};
export default FavDataLoop;