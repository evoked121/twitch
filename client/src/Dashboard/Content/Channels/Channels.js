import React from "react";
import { ChannelCard } from "./ChannelCard.js";
import { useNavigate } from "react-router-dom";

/*const dummyChannels = [
  {
    id: 1,
    title: "test",
    avatarUrl: null,
    username: "kevin",
    isOnline: false,
  },
  {
    id: 2,
    title: "test",
    avatarUrl: null,
    username: "kevin1",
    isOnline: true,
  },
];*/

export const Channels = ({ channels }) => {
  const navigate = useNavigate();
  const handleNavigateToChannel = (id) => {
    navigate(`/channel/${id}`);
  };
  return (
    <div className="channels-container">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.id}
          id={channel.id}
          title={channel.title}
          username={channel.username}
          isOnline={channel.isOnline}
          avatarUrl={channel.avatarUrl}
          navigateToChannelHandler={handleNavigateToChannel}
        />
      ))}
    </div>
  );
};
