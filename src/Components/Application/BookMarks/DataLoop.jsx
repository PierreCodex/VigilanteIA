import React, { Fragment, useContext } from 'react';
import { NoBookmarksFound } from '../../../Constant';
import { Row, Card, Col, } from 'reactstrap';
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import SweetAlert from 'sweetalert2';
import BookmarkContext from '../../../_helper/Bookmark';
import { H6, P, Image, UL, LI } from '../../../AbstractElements';

const DataLoop = () => {
    const { bookmark, mybookmark, removebookmark, removemybookmark, setEditrow, setEditImgUrl, editModal, seteditModal } = useContext(BookmarkContext);
    const editToggle = () => {
        seteditModal(!editModal);
    };
    const addToFavourites = (data) => {
        if (data.fillstar === false) {
            data.fillstar = true;
            mybookmark(data);
        } else {
            removemybookmark(data.id);
            data.fillstar = false;
        }
    };
    const OnHandleClick = (data) => {
        editToggle();
        setEditrow(data);
        setEditImgUrl((`/src/assets/images/${data.image}`));
    };
    const Removefrombookmark = (bookmarkId, fillstar) => {
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
                if (fillstar) removemybookmark(bookmarkId);
                removebookmark(bookmarkId);
                SweetAlert.fire('Deleted!', 'Your file has been deleted.', 'success');
            } else {
                SweetAlert.fire('Your imaginary file is safe!');
            }
        });
    };

    return (
        <Fragment>
            <Row id="bookmarkData">
                {bookmark.length > 0 ? (
                    bookmark.map((data) => {
                        return (
                            <Col xl="3" className='xl-50' lg="6" sm="6" md="4" key={data.id}>
                                <Card className="bookmark-card o-hidden">
                                    <div className="details-website">
                                        <Image attrImage={{ className: 'img-fluid', src: `${(`/src/assets/images/${data.image}`)}`, alt: '' }} />
                                        <div className={`favourite-icon ${data.fillstar ? 'favourite' : ''}`} onClick={() => addToFavourites(data)}  >
                                            <a href="#javascript"><i className="fa fa-star"></i></a></div>
                                        <div className="desciption-data">
                                            <div className="title-bookmark">
                                                <H6> {data.title} </H6>
                                                <P> {data.website_url} </P>
                                                <div className="hover-block">
                                                    <UL attrUL={{ className: 'simple-list flex-row' }}>
                                                        <LI><a href="#javascript" onClick={() => OnHandleClick(data)}><Edit2 /></a></LI>
                                                        <LI><a href="#javascript"> <Link /></a></LI>
                                                        <LI> <a href="#javascript"><Share2 /> </a></LI>
                                                        <LI> <a href="#javascript" onClick={() =>
                                                            Removefrombookmark(data.id, data.fillstar)} >
                                                            <Trash2 /> </a>
                                                        </LI>
                                                        <LI className="pull-right text-end"> <a href="#javascript"> <Tag /> </a></LI>
                                                    </UL>
                                                </div>
                                                <div className="content-general">
                                                    <P>{data.desc} </P>
                                                    <span>{data.colection}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                    <Col xl="12">
                        <div className="no-favourite">
                            <span>{NoBookmarksFound}</span>
                        </div>{' '}
                    </Col>
                )}
            </Row>
        </Fragment>
    );
};
export default DataLoop;