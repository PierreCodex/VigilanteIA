/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useCallback, useContext, useState } from "react";
import { Name, MobileNo, EmailAddress, History, Edit, Delete, Print, General } from "../../../../Constant";
import { H5, H6, Image, LI, P, UL } from "../../../../AbstractElements";
import ContactAppContext from "../../../../_helper/Contact";
import SearchNotFoundClass from "./SearchNotFoundClass";
import PrintModal from "./PrintModal";
import SweetAlert from "sweetalert2";

const ContactDetailsClass = ({ selectedUser, listOfUser, userEditCallback, editurl, imgUpdate }) => {
  const [printmodal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printmodal);
  const { deletedUser } = useContext(ContactAppContext);

  const toggleCallback = useCallback((toggle) => {
    setPrintModal(toggle);
  });

  const history = () => {
    document.querySelector(".history").classList.add("show");
  };

  const EditUSers = (usersData) => {
    userEditCallback(true, usersData, usersData.avatar);
  };

  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };

  const deleteUser = (userId) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        deletedUser(userId);
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Fragment>
      {selectedUser ? (
        <div className="profile-mail">
          <div className="media">
          <Image attrImage={{ className: "img-100 img-fluid m-r-20 rounded-circle update_img_0", src: `${imgUpdate ? editurl : dynamicImage(selectedUser.avatar)}`, alt: "User Avatar" }} />
            <div className="media-body mt-0">
              <H5>
                <span className="first_name_0">{selectedUser.name}</span> <span className="last_name_0">{selectedUser.surname}</span>
              </H5>
              <P attrPara={{ className: "email_add_0" }}>
                {selectedUser.email}
              </P>
              <UL attrUL={{ className: "flex-row" }}>
                <LI>
                  <a href="#javaScript" onClick={() => EditUSers(selectedUser)}>
                    {Edit}
                  </a>
                </LI>
                <LI>
                  <a href="#javaScript" onClick={() => deleteUser(selectedUser.id)}>
                    {Delete}
                  </a>
                </LI>
                <LI>
                  <a href="#javaScript" onClick={() => history()}>
                    {History}
                  </a>
                </LI>
                <LI>
                  <a href="#javaScript" onClick={() => printModalToggle()} data-toggle="modal" data-target="#printModal">
                    {Print}
                  </a>
                </LI>
              </UL>
            </div>
          </div>
          <div className="email-general">
            <H6 attrH6={{ className: "mb-3" }}>{General}</H6>
            <UL>
              <LI>
                {Name} <span className="font-primary first_name_0">{selectedUser.name}</span>
              </LI>
              <LI>
                {MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span>
              </LI>
              <LI>
                {EmailAddress} <span className="font-primary email_add_0">{selectedUser.email} </span>
              </LI>
            </UL>
          </div>
        </div>
      ) : (
        <SearchNotFoundClass />
      )}
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printmodal={printmodal} selectedUser={selectedUser} />}
    </Fragment>
  );
};

export default ContactDetailsClass;
