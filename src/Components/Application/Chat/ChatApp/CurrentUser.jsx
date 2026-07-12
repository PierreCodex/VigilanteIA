import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Image } from "../../../../AbstractElements";
import ChatAppContext from "../../../../_helper/Chat";

const CurrentUser = () => {
  const { currentUserr } = useContext(ChatAppContext);
  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };

  return (
    <Fragment>
      {currentUserr && (
        <div className="media">
          <Image
            attrImage={{
              src: `${dynamicImage(currentUserr.thumb)}`,
              className: "rounded-circle user-image",
              alt: "",
            }}
          />
          <div className="about">
            <Link to={`/app/users/userprofile`}>
              <div className="name f-w-600">{currentUserr.name}</div>
            </Link>
            <div className="status">{currentUserr.status}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CurrentUser;
