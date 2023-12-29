import { useEffect } from "react";
import { useStore } from "../../store";
import {
  closeChatSubscription,
  getChatHistory,
  sendChatMessage,
} from "../../socketConn";
import { useUserDetails } from "./useUserDetails";

export const useChatHistory = (channelId) => {
  const { chatHistory } = useStore();
  const { username } = useUserDetails();

  console.log(username);
  /*const { username } = useUserDetails();*/
  useEffect(() => {
    getChatHistory(channelId);

    return () => {
      closeChatSubscription(channelId);
    };
  }, []);

  const sendMessage = (message) => {
    sendChatMessage(channelId, {
      author: username ? username : "Guest",
      content: message,
    });
  };

  return {
    messages: chatHistory?.channelId === channelId ? chatHistory.messages : [],
    sendMessage,
  };
};
