import React from "react";

export const Sidebar = ({ channels }) => {
  return (
    <div className="sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">FOLLOWED CHANNELS</span>
      {channels?.map((channel) => (
        //rendering list最外层一定要加key
        <div className="sidebar-list-item" key={channel.id}>
          <span className="sidebar-list-username">{channel.username}</span>
          <span
            className="sidebar-list-status"
            style={{
              color: channel.isOnline ? "green" : "red",
            }}
          >
            {channel.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      ))}
    </div>
  );
};
