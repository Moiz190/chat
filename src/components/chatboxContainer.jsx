import React from "react";
import "../App.css";
import dummyPic from "../assets/images/dummy.jpg";
const chatboxContainer = ({
  id,
  name,
  image,
  message,
  messageQuantity,
  onClick,
  selectedUserId,
}) => {
  return (
    <div
      onClick={onClick}
      key={id}
      className={`flex chatboxContainer border-b-1 relative pointer ${
        selectedUserId === id && "bg-lightgray"
      }`}
    >
      <div className="conversation-section-user-dp">
        <img src={image ?? dummyPic} alt="user dp" />
      </div>
      <div className="ml-1 w-75 flex column">
        <h4 className="mb-1">{name}</h4>
        <span className="text-sm message-description">{message}</span>
      </div>
      <div className="absolute text-center text-white number_of_messages_container vertically-middle rounded-sm">
        <span>{messageQuantity}</span>
      </div>
    </div>
  );
};

export default chatboxContainer;
