import React from "react";
import { Messages } from "./Messages.js";
import { NewMessageInput } from "./NewMessageInput.js";
import { useChatHistory } from "../../../../shared/hooks/useChatHistory.js";
import { useUserDetails } from "../../../../shared/hooks/useUserDetails.js";

export const Chat = ({ channelId }) => {
  const { sendMessage, messages } = useChatHistory(channelId);
  console.log(messages);
  return (
    <div className="chat-section">
      <div className="chat-title-container">
        <span className="chat-title-text">Stream Chat</span>
      </div>
      <Messages messages={messages} />
      <NewMessageInput sendMessage={sendMessage} />
    </div>
  );
};
