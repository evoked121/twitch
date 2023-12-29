import { useEffect, useState } from "react";
import { getChannelSettings, updateChannelSettings } from "../../api";
import toast from "react-hot-toast";

export const useChannelSettings = () => {
  const [channelSettings, setChannelSettings] = useState(null);

  const fetchSettings = async () => {
    const response = await getChannelSettings();
    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occured when fetching settings"
      );
    }
    setChannelSettings({
      username: response.data.username,
      title: response.data.title,
      description: response.data.description,
      avatarUrl: response.data.avatarUrl,
      streamKey: response.data.streamKey,
    });
  };

  const saveSettings = async (data) => {
    const response = await updateChannelSettings(data);
    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occured when saving settings"
      );
    }
    toast.success("Channel settings saved success");
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    isFetching: !channelSettings,
    channelSettings,
    saveSettings,
  };
};
