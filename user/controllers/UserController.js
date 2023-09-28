const userModel = require("../../common/models/User");

module.exports = {
  addUser: (req, res) => {
    const payload = req.body;

    userModel
      .createUser(Object.assign(payload))
      .then((user) => {
        return res.status(200).json({
          status: true,
          data: {
            user: user.toJSON(),
          },
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  getUser: (req, res) => {
    const {
      params: { userId },
    } = req;

    userModel
      .findUser({ id: userId })
      .then((user) => {
        return res.status(200).json({
          status: true,
          data: user.toJSON(),
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  getAllUsers: (req, res) => {
    userModel
      .findAllUsers(req.query)
      .then((users) => {
        return res.status(200).json({
          status: true,
          data: users,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },
};
