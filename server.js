const express = require("express");
const mongoose = require("mongoose");
const student_router = require("./routers/student.router");
const logger = require("./logger");
const app = express();
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("js-yaml");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/student", student_router);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  logger.info("Database Connected successfully");
});

// Load the YAML file and parse it
const swaggerDocument = yaml.load(
  fs.readFileSync("./swagger_output.yaml", "utf8")
);

const PORT = process.env.PORT || 8080;

// Serve Swagger docs
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
