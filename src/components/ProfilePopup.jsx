import React from "react";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import close from "../assets/images/close.png";
import "../App.css";
const profilePopup = ({ onHide, userData }) => {
  return (
    <>
      <div className="mx-auto popup_container absolute w-100 p-2">
        <div className="flex align-center justify-between">
          <div className="flex align-center">
            <div className="popup_section_user_dp">
              <img src={userData.image} alt="user dp" />
            </div>
            <div className="ml-1 text-white">
              <div className="flex">
                <h4>{userData.name}</h4>
                {userData.isPremium && (
                  <span className="conversation_container_account_status ml-1 bg-gold text-sm rounded-lg">
                    Premium
                  </span>
                )}
              </div>
              <div className="text-sm">
                Sent . <span>HH:MM</span>
              </div>
            </div>
          </div>
          <div>
            <div onClick={onHide} className="mr-1 pointer popup-btn">
              <img src={close} alt="close" />
            </div>
          </div>
        </div>
        <div className="popup_image_container mx-auto"></div>
        <div className="popup-div">
          {/* <div className="popup-btn absolute pointer vertically-middle left-arrow">
            <img src={leftArrow} alt="left" />
          </div> */}
          <div className="popup-dp-container">
            <div className="popup-dp">
              <img src={userData.image} alt="user dp" />
            </div>
          </div>
          {/* <div className="popup-btn pointer absolute vertically-middle right-arrow">
            <img src={rightArrow} alt="right" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default profilePopup;
