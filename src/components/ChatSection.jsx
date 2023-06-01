import React, { useEffect, useMemo, useState, useRef } from "react";
import "../App.css";
import ProfilePopup from "./profilePopup";
import upload from "../assets/images/upload.png";
import verified from "../assets/images/verified.png";
import deleteBtn from "../assets/images/delete.png";
import report from "../assets/images/report.png";
import phone from "../assets/images/phone.png";
import block from "../assets/images/block.png";
import video from "../assets/images/video.png";
import call from "../assets/images/call.png";
import menu from "../assets/images/menu.png";
import dummyPic from "../assets/images/dummy.jpg";
import sampleUser from "../assets/images/userDp2.jpg";
const multiplePhotos = [
  {
    photo: sampleUser,
  },
  {
    photo: sampleUser,
  },
  {
    photo: sampleUser,
  },
];
const ChatSection = ({ clickedUserData }) => {
  const dropdownElement = useRef(null);
  const dropdownContent = useRef(null);
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState({});
  const handleClickOutside = (e) => {
    if (
      dropdownElement.current &&
      !dropdownElement.current.contains(e.target) &&
      dropdownContent.current &&
      !dropdownContent.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useMemo(() => {
    setSelectedUserData(clickedUserData);
    Object.keys(selectedUserData).length !== 0 && setStep(1);
  }, [clickedUserData, selectedUserData]);
  return (
    <>
      {step === 0 ? (
        <div className="conversation_container border-gray rounded-sm w-50 blank">
          <div className="min-sm max-sm flex column">
            <div className="flex justify-center align-center min-sm max-sm">
              <div className="flex column align-center">
                <div className="flex justify-center bg-gray w-50 p-9 rounded-md mb-3"></div>
                <div>
                  <h2 className="flex justify-center text-md margin-b-1">
                    Messages
                  </h2>
                  <p className="flex justify-center text-sm">
                    Chat with your followers and enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="conversation_container border-gray rounded-sm w-50">
          {showPopup && (
            <ProfilePopup
              userData={clickedUserData}
              onHide={() => setShowPopup(false)}
            />
          )}
          <div className="min-sm max-sm flex column">
            <div className="header border-b-1 flex align-center justify-between">
              <div className="flex align-center">
                <div
                  onClick={() => setShowPopup(true)}
                  className="conversation_container_user_image mr-1 pointer"
                >
                  <img
                    src={selectedUserData.image ?? dummyPic}
                    alt="profile photo"
                  />
                </div>
                <div>
                  <div className="flex">
                    <h4>{selectedUserData.name}</h4>
                    {selectedUserData.isPremium && (
                      <span className="text-white conversation_container_account_status ml-1 bg-gold text-sm rounded-lg">
                        Premium
                      </span>
                    )}
                  </div>
                  <div className="text-sm last_seen_container">
                    <span>
                      {" "}
                      Last seen <span>8</span> min ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 align-center">
                <div className="dropdown poitner blank">
                  <img src={call} alt="call" />
                </div>
                <div className="dropdown poitner blank">
                  <img src={video} alt="video" />
                </div>
                <div className="dropdown relative">
                  <div
                    ref={dropdownElement}
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <img className="pointer" src={menu} alt="menu" />
                  </div>
                  {showDropdown && (
                    <ul
                      ref={dropdownContent}
                      className="dropdown-content rounded-md absolute bg-white"
                    >
                      <li className="flex pointer">
                        <span className="dropdown-content-icon pointer">
                          <img src={report} />
                        </span>
                        <span className="ml-1">Report</span>
                      </li>
                      <li className="flex align-center pointer">
                        <span className="dropdown-content-icon">
                          <img src={block} />
                        </span>
                        <span className="ml-1">Block</span>
                      </li>
                      <li className="flex align-center pointer">
                        <span className="dropdown-content-icon">
                          <img src={deleteBtn} />
                        </span>
                        <span className="text-red ml-1">Delete</span>
                      </li>
                      <li className="flex pointer dropdown_content_mobile_only d-none">
                        <span className="dropdown-content-icon">
                          <img src={video} alt="video" />
                        </span>
                        <span className="ml-1">Video</span>
                      </li>
                      <li className="flex pointer dropdown_content_mobile_only d-none">
                        <span className="dropdown-content-icon">
                          <img src={call} alt="call" />
                        </span>
                        <span className="ml-1">Call</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            {/* <!-- conversation-section  --> */}
            <div className="flex column conversation_section overflow-auto bg-white">
              <div className="flex right">
                <div className="flex column message_container max_text_message">
                  <span className="text_message right_side_message">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- left-message  --> */}
              <div className="flex">
                <div className="flex column message_container max_text_message">
                  <span className="text_message left_side_message bg-gray">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- right-message  --> */}
              <div className="flex right">
                <div className="flex column message_container max_text_message">
                  <span className="text_message right_side_message">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- left-message  --> */}
              <div className="flex">
                <div className="flex column message_container max_text_message">
                  <span className="text_message left_side_message bg-gray">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- right Message  --> */}
              <div className="flex right">
                <div className="flex column message_container max_text_message">
                  <span className="text_message right_side_message">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- left-message  --> */}
              <div className="flex">
                <div className="flex column message_container max_text_message">
                  <span className="text_message left_side_message bg-gray">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- right message  --> */}
              <div className="flex right">
                <div className="flex column message_container max_text_message">
                  <span className="text_message right_side_message">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- left-message  --> */}
              <div className="flex">
                <div className="flex column message_container max_text_message">
                  <span className="text_message left_side_message bg-gray">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- Tip sent  --> */}
              <div className="flex">
                <div className="flex column message_container">
                  <div className="tip-message tip-sent-message">
                    <span className="text-md">$40</span>
                    <span className="text-white text-sm flex border-top">
                      <span className="mr-1">
                        <img src={verified} alt="tick" />
                      </span>
                      Tip sent
                    </span>
                  </div>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!--Tip received--> */}
              <div className="flex right">
                <div className="flex column message_container">
                  <div className="tip-message tip-received-message">
                    <span className="text-md">$200</span>
                    <span className="text-white text-sm flex border-top">
                      <span className="mr-1">
                        <img src={verified} alt="tick" />
                      </span>
                      Tip Received
                    </span>
                  </div>
                  <span className="flex right text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!--Images -->     */}
              <div className="flex right message_container">
                <div className="flex column mx-1">
                  <div className="bg-gray image-message rounded-md multiple-images">
                    <img
                      className={`${multiplePhotos.length >= 2 && "bg-blur"}`}
                      src={sampleUser}
                      alt=""
                    />
                    {multiplePhotos.length >= 2 && (
                      <span className="pointer text-center w-50 number-of-img rounded-sm text-white">
                        {multiplePhotos.length - 1} More
                      </span>
                    )}
                  </div>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>

              <div className="flex left message_container">
                <div className="flex column mx-1">
                  <div className="bg-gray image-message rounded-md flex align-center justify-center"></div>
                </div>
              </div>
              {/* <!-- left-message  --> */}
              <div className="flex">
                <div className="flex column message_container max_text_message">
                  <span className="text_message left_side_message bg-gray">
                    Text message goes here... Iure, sed? Minus numquam
                    laboriosam labore dolor, beatae voluptates maxime dolore
                    adipisci accusantium sequi aliquid iure dolores dolorem
                    nostrum,
                  </span>
                  <span className="flex text-sm left message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>

              {/* <!-- right message  --> */}
              <div className="flex right">
                <div className="flex column message_container max_text_message">
                  <span className="text_message right_side_message bg-gray">
                    Text message goes here... Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. explicabo, at sit!
                  </span>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>

              {/* <!-- left-message  --> */}
              <div className="flex">
                <div className="flex column message_container max_text_message">
                  <span className="text_message left_side_message bg-gray">
                    Text message goes here...
                  </span>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              {/* <!-- phone-call message  --> */}
              <div className="flex right">
                <div className="flex column message_container max_text_message pointer">
                  <span className="phone-call-message enthusiast-phone-call flex align-center">
                    <div className="mr-1">
                      <img src={phone} alt="phone" />
                    </div>
                    Phone Call
                  </span>
                  <span className="flex text-sm right message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex column message_container max_text_message pointer">
                  <span className="phone-call-message user-phone-call flex align-center">
                    <div className="mr-1">
                      <img src={phone} alt="phone" />
                    </div>
                    Phone Call
                  </span>
                  <span className="flex text-sm message-time">
                    Status . HH:MM
                  </span>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="flex justify-between align-center">
                <label htmlFor="uploadFiles" className="pointer upload_image">
                  <img src={upload} alt="upload" />
                </label>
                <input
                  className="d-none"
                  type="file"
                  multiple
                  id="uploadFiles"
                />
                <div className="grow">
                  <textarea
                    className="footer-textarea w-100 rounded-sm"
                    placeholder="Type message here..."
                  ></textarea>
                </div>
                <div className="send_btn">
                  <button className="pointer text-white border-0 bg-gold rounded-lg">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSection;
