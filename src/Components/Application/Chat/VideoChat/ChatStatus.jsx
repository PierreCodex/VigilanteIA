import { Fragment, useContext } from "react";
import ChatAppContext from "../../../../_helper/Chat";
import { Image, LI, UL } from "../../../../AbstractElements";
import CurrentUser from "../ChatApp/CurrentUser";
import SearchChatList from "../ChatApp/SearchChatList";
import errorImg from "/src/assets/images/search-not-found.png";

const ChatStatus = () => {
  const { selectedUserr, allMemberss } = useContext(ChatAppContext);
  const dynamicImage = (image) => {
    return `/src/assets/images/${image}`;
  };
  var activeChat = 0;
  if (selectedUserr != null) activeChat = selectedUserr.id;

  return (
    <Fragment>
      <div className="chat-box">
        <div className="chat-left-aside">
          <CurrentUser />
          <div className="people-list" id="people-list">
            <SearchChatList />
            {allMemberss && allMemberss.length > 0 ? (
              <UL attrUL={{ className: "list custom-scrollbar" }}>
                {allMemberss.map((item) => {
                  return (
                    <LI
                      attrLI={{
                        className: `clearfix ${activeChat === item.id ? "active" : ""}`,
                      }}
                      key={item.id}
                    >
                      <Image
                        attrImage={{
                          src: `${dynamicImage(item.thumb)}`,
                          className: "rounded-circle user-image",
                          alt: "",
                        }}
                      />
                      <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                      <div className="media-body">
                        <div className="about">
                          <div className="name">{item.name}</div>
                          <div className="status">{item.status}</div>
                        </div>
                      </div>
                    </LI>
                  );
                })}
              </UL>
            ) : (
              <Image
                attrImage={{
                  className: "img-fluid m-auto",
                  src: { errorImg },
                  alt: "",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ChatStatus;
