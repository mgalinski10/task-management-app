const UserDetails = require("../models/userDetailsModel");
const {
  createUserDetails,
  getUserDetails,
  updateUserDetails,
  deleteUserDetails,
} = require("../controller/userDetailsController");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("User Details Controller", () => {
  it("should create user details successfully", async () => {
    const req = {
      body: {
        nickname: "TestNick",
        gender: "Male",
        country: "TestLand",
      },
      userId: "1234",
    };
    const res = mockResponse();

    UserDetails.prototype.save = jest.fn().mockResolvedValue({
      nickname: req.body.nickname,
      gender: req.body.gender,
      country: req.body.country,
      userId: req.userId,
    });

    await createUserDetails(req, res);

    expect(UserDetails.prototype.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
  });

  it("should fetch user details for a user", async () => {
    const req = { userId: "1234" };
    const res = mockResponse();

    UserDetails.findOne = jest.fn().mockResolvedValue({
      nickname: "TestNick",
      gender: "Male",
      country: "TestLand",
      userId: req.userId,
    });

    await getUserDetails(req, res);

    expect(UserDetails.findOne).toHaveBeenCalledWith({ userId: req.userId });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ userId: req.userId })
    );
  });

  it("should return 404 if user details not found", async () => {
    const req = { userId: "1234" };
    const res = mockResponse();

    UserDetails.findOne = jest.fn().mockResolvedValue(null);

    await getUserDetails(req, res);

    expect(UserDetails.findOne).toHaveBeenCalledWith({ userId: req.userId });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "User details not found",
    });
  });

  it("should update user details successfully", async () => {
    const req = {
      body: {
        nickname: "UpdatedNick",
        gender: "Non-binary",
        country: "UpdatedLand",
      },
      userId: "1234",
    };
    const res = mockResponse();

    UserDetails.findOneAndUpdate = jest.fn().mockResolvedValue({
      nickname: req.body.nickname,
      gender: req.body.gender,
      country: req.body.country,
      userId: req.userId,
    });

    await updateUserDetails(req, res);

    expect(UserDetails.findOneAndUpdate).toHaveBeenCalledWith(
      { userId: req.userId },
      req.body,
      { new: true }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
  });

  it("should delete user details successfully", async () => {
    const req = { userId: "1234" };
    const res = mockResponse();

    UserDetails.findOneAndDelete = jest.fn().mockResolvedValue(true);

    await deleteUserDetails(req, res);

    expect(UserDetails.findOneAndDelete).toHaveBeenCalledWith({
      userId: req.userId,
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "User details deleted successfully",
    });
  });
});
