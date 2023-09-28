const _projectModel = require("../../common/models/SecondChance");

module.exports = {
  addProject: (req, res) => {
    const { body } = req;
    _projectModel
      .newProject(body)
      .then((project) => {
        return res.status(200).json({
          status: true,
          data: project.toJSON(),
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  getAllProjects: (req, res) => {
    _projectModel
      .findAllProjects(req.query)
      .then((projects) => {
        return res.status(200).json({
          status: true,
          data: projects,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  deleteProject: (req, res) => {
    const {
      params: { projectCode }
    } = req;

    _projectModel.deleteProject({projectCode: projectCode})
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
      });
  }
};
