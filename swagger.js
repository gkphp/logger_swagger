const swaggerAutogen = require("swagger-autogen")();
const swaggerJSDoc = require("swagger-jsdoc");
const yaml = require("js-yaml");
const fs = require("fs");

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./routers/student.router.js",
  "./controllers/student.controller.js",
  "./models/student.js",
];

// info: {
//   title: "Student API",
//   description: "API for managing students",
//   version: "1.0.0",
// },
// host: "localhost:8080",
// basePath: "/student",
// schemes: ["http"],
// consumes: ["application/json"],
// produces: ["application/json"],

const doc = {
  definition: {
    openapi: "3.0.0", // Specify OpenAPI version
    info: {
      title: "Student Application", // Title of the API
      version: "1.0.0", // Version of the API
      description: "API for managing students", // Description of the API
    },
    servers: [
      {
        url: "http://localhost:8080", // Base URL of the API
      },
    ],
    components: {
      schemas: {
        Student: {
          type: "object",
          properties: {
            // id: {
            //   type: "string",
            //   description: "Unique identifier for the student",
            //   example: "61b63f93fc13ae3953000097",
            // },
            firstName: {
              type: "string",
              description: "First name of the student",
              example: "John",
            },
            lastName: {
              type: "string",
              description: "Last name of the student",
              example: "Doe",
            },
            email: {
              type: "string",
              description: "Email address of the student",
              example: "johndoe@example.com",
            },
            dateOfBirth: {
              type: "string",
              format: "date",
              description: "Student's date of birth",
              example: "1990-01-01",
            },
          },
          required: ["firstName", "lastName", "email", "dateOfBirth"],
        },
        // ErrorResponse: {
        //   type: "object",
        //   properties: {
        //     message: {
        //       type: "string",
        //       description: "Description of the error",
        //       example: "An error occurred",
        //     },
        //     errorCode: {
        //       type: "integer",
        //       description: "HTTP status code for the error",
        //       example: 400,
        //     },
        //   },
        // },
      },
    },
  },
  apis: ["./routers/student.router.js"], // Path to your route files
};

// swaggerAutogen(outputFile, endpointsFiles, doc);
const swaggerSpec = swaggerJSDoc(doc);
const swaggerYAML = yaml.dump(swaggerSpec);
fs.writeFileSync("./swagger_output.yaml", swaggerYAML, "utf8");
console.log("Swagger YAML file generated successfully.");
