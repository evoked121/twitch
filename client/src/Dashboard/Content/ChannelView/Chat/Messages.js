import React from "react";

const Message = ({ author, content }) => {
  return (
    <span className="chat-messages-message">
      <span style={{ fontWeight: "bold" }}>{author}:</span>
      {content}
    </span>
  );
};

export const Messages = ({ messages }) => {
  return (
    <div className="chat-messages-container">
      {messages.map((m) => (
        <Message author={m.author} key={m.id} content={m.content} />
      ))}
    </div>
  );
};
