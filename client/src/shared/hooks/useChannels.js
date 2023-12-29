import { useState } from "react";
import {
  getFollowedChannels,
  getChannels as getChannelsRequest,
} from "../../api";
import toast from "react-hot-toast";

export const useChannels = () => {
  const [channels, setChannels] = useState(null);
  const getChannels = async (isLogged = false) => {
    const responseData = await getChannelsRequest();
    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occured when get channels"
      );
    }
    if (!isLogged) {
      return setChannels({
        channels: responseData.data.channels,
      });
    }
    const followedChannelsData = await getFollowedChannels();
    if (followedChannelsData.error) {
      return toast.error(
        followedChannelsData.exception?.response?.data ||
          "Error occured when get followed channels"
      );
    }
    setChannels({
      channels: responseData.data.channels,
      followedChannelsData: responseData.data.channels.filter((channel) =>
        followedChannelsData.data.followedChannels.includes(channel.id)
      ),
    });
  };

  return {
    getChannels,
    isFetching: Boolean(!channels),
    allChannels: channels?.channels,
    followedChannels: channels?.followedChannelsData,
  };
};
