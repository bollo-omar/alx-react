import React from "react";
import "./Notifications.css";
import imgUrl from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications(props) {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
      <button
        style={{
          position: "absolute",
          right: "20px",
          top: "20px",
        }}
        aria-label="close"
        onClick={(e) => console.log("Close button has been clicked")}
      >
        <img src={imgUrl} alt="img" style={{ height: "16px", width: "16px" }} />
      </button>
    </div>
  );
}

export default Notifications;
