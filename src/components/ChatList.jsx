import React, { useMemo, useState } from "react";
import "../App.css";
import ChatboxContainer from "./chatboxContainer";
const ChatList = ({ chatList, onClick }) => {
  const [searchedText, setSearchedText] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(0);
  const handleClick = (e) => {
    onClick(e);
    setSelectedUserId(e.id);
  };
  const filteredList = useMemo(() => {
    const lowerSearchedText = searchedText.toLowerCase();
    return chatList.filter((user) => {
      const lowerUserName = user.name.toLowerCase();
      return (
        lowerSearchedText === "" || lowerUserName.includes(lowerSearchedText)
      );
    });
  }, [chatList, searchedText]);
  return (
    <>
      <div className="conversation_list_container w-25 border-gray rounded-sm flex column">
        <div className="searchBar p-2 border-b-1">
          <input
            type="search"
            className="w-100 rounded-sm border-gray"
            placeholder="Search your desired Enthusiasts"
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
          />
        </div>
        <div className="conversation-list-section bg-white my-2">
          {filteredList.length ? (
            filteredList.map((user) => (
              <ChatboxContainer
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                message={user.message}
                messageQuantity={user.messageQuantity}
                onClick={() => handleClick(user)}
                selectedUserId={selectedUserId}
              />
            ))
          ) : (
            <div className="text-center">
              {" "}
              <span>There is nothing to show</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatList;
