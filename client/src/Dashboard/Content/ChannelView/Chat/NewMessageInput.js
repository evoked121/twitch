import React, { useState } from "react";

export const NewMessageInput = ({ sendMessage }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleValueCahnge = (e) => {
    setMessageContent(e.target.value);
  };

  const handleSendMessage = () => {
    //send message to server
    if (messageContent.length > 0) {
      sendMessage(messageContent);
    }
    //after sending message, reset input value
    setMessageContent("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-message-input-container">
      <input
        className="chat-message-input"
        placeholder="Type message ..."
        value={messageContent}
        onChange={handleValueCahnge}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
