const router = require("express").Router();
const MotivationalControllers = require("../motivational/controllers/MotivationControllers");
const SchemaValidator = require("../common/middleware/SchemaValidationMiddleware");
const quotePayload = require("../motivational/schema/quotesPayload");


router.post(
    "/add",
    [SchemaValidator.verify(quotePayload)],
    MotivationalControllers.addQuote
);
router.get("/all", MotivationalControllers.getAllQuotes);
router.get("/:quoteId", MotivationalControllers.getQuote);
router.patch(
    "/edit/:quoteId",
    [SchemaValidator.verify(quotePayload)],
    MotivationalControllers.updateQuote
);
router.delete("/:quoteId", MotivationalControllers.deleteQuote);

module.exports = router;