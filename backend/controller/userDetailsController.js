const UserDetails = require("../models/userDetailsModel");

const createUserDetails = async (req, res) => {
  try {
    const { nickname, gender, country } = req.body;
    const { userId } = req;

    const userDetails = new UserDetails({
      nickname,
      gender,
      country,
      userId,
    });

    await userDetails.save();

    res.status(201).json(userDetails);
  } catch (error) {
    res.status(500).json({ message: "Error creating user details", error });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { userId } = req;
    const userDetails = await UserDetails.findOne({ userId });

    if (!userDetails) {
      return res.status(404).json({ message: "User details not found" });
    }

    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details", error });
  }
};

const updateUserDetails = async (req, res) => {
  console.log(req.userId);
  try {
    const { userId } = req;
    const userDetails = await UserDetails.findOneAndUpdate(
      { userId },
      req.body,
      { new: true }
    );

    if (!userDetails) {
      return res
        .status(404)
        .json({ message: "User details not found or you are not authorized" });
    }

    res.status(200).json(userDetails);
  } catch (error) {
    res.status(500).json({ message: "Error updating user details", error });
  }
};

const deleteUserDetails = async (req, res) => {
  console.log(req.userId);
  try {
    const { userId } = req;
    const userDetails = await UserDetails.findOneAndDelete({ userId });

    if (!userDetails) {
      return res
        .status(404)
        .json({ message: "User details not found or you are not authorized" });
    }

    res.status(200).json({ message: "User details deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user details", error });
  }
};

module.exports = {
  createUserDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
};
