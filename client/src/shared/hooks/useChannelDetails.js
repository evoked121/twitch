import toast from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../api";

import { useState } from "react";

export const useChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const getChannelDetails = async (id) => {
    const response = await getChannelDetailsRequest(id);
    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occured when get channel detail"
      );
    }
    setChannelDetails(response.data);
  };
  return {
    channelDetails,
    isFetching: !channelDetails,
    getChannelDetails,
  };
};
