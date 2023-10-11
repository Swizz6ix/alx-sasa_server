const Express = require("express");
const app = Express();
const cors = require("cors");
const { sequelize } = require("./db_init");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = require("./docs/apidoc");
const MotivationalRoutes = require("./motivational/routes");
const UserRoutes = require("./user/routes");
const ProjectRoutes = require("./projects/routes");
const _ProjectRoutes = require("./_projects/routes");
const TrailblazerRoutes = require("./from_the_mailBox/routes");
const MemeRoutes = require("./meme/routes");
const browserObject = require("./browserInstance");
const scraperController = require("./scrapeController");
const signIn = require("./login");

// Setting up environment variables
require("dotenv").config();
const { port } = require("./config");
const { Insert } = require("./scraperData");
const PORT = process.env.DEV_PORT || port;
// let browserInstance = browserObject.startBrowser()
// scraperController(browserInstance)
// signIn.signIn()
const specs = swaggerJsdoc(options.apiDocumentation);

app.use(cors());
app.use(Express.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.get("/data", (req, res) => {
  res.json({
    Hello: "Welcome to ALX SASA",
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database");
  });

//Syncing the model that are defined on sequelize with the tables that already
//exists in the database. It creates models as tables that do not exist in the DB.
sequelize.sync().then(() => {
  console.log("Sequelize initialized");

  Insert();
  app.use("/user", UserRoutes);
  app.use("/project", ProjectRoutes);
  app.use("/second_chance", _ProjectRoutes);
  app.use("/motivation", MotivationalRoutes);
  app.use("/trailblazer", TrailblazerRoutes);
  app.use("/memes", MemeRoutes);
  app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
  });
});
