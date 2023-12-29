import User from "../../models/User.js";

export const getChannelSettings = async (req, res) => {
  try {
    const { userId } = req.user;
    //创建jwt时设置的参数名称是userId
    const userData = await User.findById(userId, {
      channel: 1,
      username: 1,
    }).populate("channel");
    return res.status(200).json({
      id: userData.channel._id,
      username: userData.username,
      title: userData.channel.title,
      description: userData.channel.description,
      avatarUrl: userData.channel.avatarUrl,
      streamKey: userData.channel.streamKey,
    });
  } catch (err) {
    return res.status(500).send("something wrong");
  }
};
