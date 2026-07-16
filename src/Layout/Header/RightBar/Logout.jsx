import React, { Fragment } from "react";
import { Card } from "reactstrap";
import { Btn, LI } from "../../../AbstractElements";
import { LogOut } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { cerrarSesion } from "../../../api/vigilanteApi";

const LogoutClass = () => {
  const history = useNavigate();
  const Logout = () => {
    cerrarSesion();
    history(`/login`);
  };

  return (
    <Fragment>
      <LI attrLI={{ className: "onhover-dropdown p-0", onClick: Logout }}>
        <Btn attrBtn={{ as: Card.Header, className: "btn btn-primary-light", color: "default" }}>
          <Link to={`/login`}>
            <LogOut />
            Log out
          </Link>
        </Btn>
      </LI>
    </Fragment>
  );
};

export default LogoutClass;
