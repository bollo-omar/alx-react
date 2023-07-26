import React from "react";
import "./Notifications.css";
import imgUrl from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications(props) {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html : getLatestNotification()}}></li>
      </ul>
      <button
        style={{
            position: 'absolute',
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
