const swaggerJsdoc = require("swagger-jsdoc");
const userSchema = require("../user/routes");

const apiDocumentation = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "alx-sasa api",
      description:
        "alx-sasa server for the alx-sasa platform, it allows the alx-sasa to perform CRUD operations",
      version: "0.1.0",
      contact: {
        name: "Ferdinand Charles",
        email: "ferdinandcharles6@gmail.com",
        url: "https://dev-portfolio-swizz6ix.vercel.app",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
      {
        url: "https://producton.server",
      },
    ],
  },
  apis: ["./user/*.js",
    "./motivational/*.js",
    './projects/*.js',
    './_projects/*js',
    './from_the_mailBox/*.js',
    './meme/*.js',
  ],
};

module.exports = { apiDocumentation };
