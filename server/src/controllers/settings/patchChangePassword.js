import User from "../../models/User.js";
import brcypt from "bcryptjs";

export const patchChangePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const { password, newPassword } = req.body;
    const userData = await User.findById(userId, { password: 1 });
    const isPasswordCorrect = await brcypt.compare(password, userData.password);
    if (!isPasswordCorrect) {
      return res.status(400).send("Invalid password.");
    }

    const encryptedPassword = await brcypt.hash(newPassword, 10);
    await User.updateOne({ _id: userId }, { password: encryptedPassword });
    return res.status(200).send("Password changed successfully");
  } catch (err) {
    return res.status(500).send("Please try again");
  }
};
