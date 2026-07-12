import React from "react";
import { H5, H6, Image, P } from "../../../AbstractElements";

const Printpreview = ({ selectedUser }) => {
  var images = ('.//src/assets/images/', true);
  const dynamicImage = (image) => {
    return images(`./${image || "user.png"}`);
  };
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint">
      <div className="media">
        <Image attrImage={{ className: "img-100 img-fluid m-r-20 rounded-circle", id: "updateimg", src: `${dynamicImage(selectedUser.avatar)}`, alt: "" }} />
        <div className="media-body mt-0">
          <H5>
            <span id="printname">{selectedUser.name} </span>
            <span id="printlast">{selectedUser.surname}</span>
          </H5>
          <P id="printmail">
            {selectedUser.email}
          </P>
        </div>
      </div>
      <div className="email-general">
        <H6>{"General"}</H6>
        <P>
          {"Email Address"}:
          <span className="font-primary" id="mailadd">
            {selectedUser.email}
          </span>
        </P>
      </div>
    </div>
  );
};

export default Printpreview;
