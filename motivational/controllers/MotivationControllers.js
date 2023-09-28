const motivationModel = require("../../common/models/Motivational");

module.exports = {
  addQuote: (req, res) => {
    const { body } = req;
    motivationModel
      .addNew(body)
      .then((quote) => {
        return res.status(200).json({
          status: true,
          data: quote.toJSON(),
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  getQuote: (req, res) => {
    const {
      params: { quoteId },
    } = req;
    console.log(req);
    console.log({ id: quoteId });
    motivationModel
      .findQuote({ id: quoteId })
      .then((quote) => {
        return res.status(200).json({
          status: true,
          data: quote.toJSON(),
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  getAllQuotes: (req, res) => {
    motivationModel
      .findAllQuotes(req.query)
      .then((quotes) => {
        return res.status(200).json({
          status: true,
          data: quotes,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  updateQuote: (req, res) => {
    const {
      params: { quoteId },
      body: payload,
    } = req;

    //If the payload does not have any keys,
    //then return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can't update the quote",
        },
      });
    }
    motivationModel
      .updateQuote({ id: quoteId }, payload)
      .then(() => {
        return motivationModel.findQuote({ id: quoteId });
      })
      .then((quote) => {
        return res.status(200).json({
          status: true,
          data: quote.toJSON(),
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: false,
          error: error,
        });
      });
  },

  deleteQuote: (req, res) => {
    const {
      params: { quoteId },
    } = req;
    motivationModel
      .dropQuote({ id: quoteId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfEntriesDeleted: numberOfEntriesDeleted,
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
};
