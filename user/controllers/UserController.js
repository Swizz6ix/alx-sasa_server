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

  updateUser: (req, res) => {
    const {
      params: { userId },
      body: payload,
    } = req;

    // If the payload does not have any keys,
    // then return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can't update the user"
        },
      });
    }
    userModel
      .upDateUser({ id: userId }, payload)
      .then(() => {
        return userModel.findUser({ id: userId });
      })
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
      })
  },

  dropUser: (req, res) => {
    const {
      params: { userId },
    } = req;
    userModel
      .dropUser({ id: userId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfEntriesDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error
        });
      })
  }
}
