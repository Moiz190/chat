import React, { useState } from "react";
import ChatList from "../components/chatList";
import ChatSection from "../components/chatSection";
import userimage from "../assets/images/images.jfif";
import sampleDp from "../assets/images/download.jfif";
import userImage from "../assets/images/userImage.jpg";
import userDp from "../assets/images/userDp2.jpg";
import dummy from "../assets/images/dummy.jpg";
import userDp1 from "../assets/images/userDp.jfif";
import user from "../assets/images/user.jfif";
import userDp2 from "../assets/images/userDp2.jpg";
import userDp3 from "../assets/images/userDp3.jfif";
const chatListData = [
  {
    id: 1,
    name: "Jiya",
    image: userDp,
    message: "This is the message the sender sent",
    messageQuantity: 3,
    isPremium: false,
  },
  {
    id: 2,
    name: "Nyla tyson",
    image: userImage,
    message: "Hi! this is nyle the science guy.",
    messageQuantity: 15,
    isPremium: true,
  },
  {
    id: 3,
    name: "Natasha",
    image: dummy,
    message: "This is the message the sender sent",
    messageQuantity: 3,
    isPremium: true,
  },
  {
    id: 4,
    name: "Jane",
    image: userDp1,
    message: "Hi! this is nyle the science guy.",
    messageQuantity: 15,
    isPremium: false,
  },
  {
    id: 5,
    name: "Joane",
    image: userDp2,
    message: "This is the message the sender sent",
    messageQuantity: 3,
    isPremium: true,
  },
  {
    id: 6,
    name: "Max",
    image: userDp3,
    message: "Hi! this is nyle the science guy.",
    messageQuantity: 15,
    isPremium: true,
  },
  {
    id: 7,
    name: "Christina",
    image: user,
    message: "This is the message the sender sent",
    messageQuantity: 3,
    isPremium: true,
  },
  {
    id: 8,
    name: "Lexi",
    image: sampleDp,
    message: "Hi! this is nyle the science guy.",
    messageQuantity: 15,
    isPremium: true,
  },
  {
    id: 9,
    name: "Helen",
    image: userDp1,
    message: "This is the message the sender sent",
    messageQuantity: 3,
    isPremium: false,
  },
  {
    id: 10,
    name: "Nina",
    image: userDp2,
    message: "Hi! this is nyle the science guy.",
    messageQuantity: 15,
    isPremium: false,
  },
  {
    id: 11,
    name: "Michael",
    image: userDp3,
    message: "This is the message the sender sent",
    messageQuantity: 3,
    isPremium: true,
  },
  {
    id: 12,
    name: "Anna",
    image: userimage,
    message: "Hi! this is nyle the science guy.",
    messageQuantity: 15,
    isPremium: true,
  },
];
const chat = () => {
  const [clickedUserData, setClickedUserData] = useState({});
  const saveClickedUser = (data) => {
    setClickedUserData(data);
  };
  return (
    <>
      <div className="flex chat_container justify-center">
        <ChatList chatList={chatListData} onClick={saveClickedUser} />
        <ChatSection clickedUserData={clickedUserData} />
      </div>
    </>
  );
};

export default chat;
