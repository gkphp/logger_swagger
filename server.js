const express = require("express");
const mongoose = require("mongoose");
const student_router = require("./routers/student.router");
const logger = require("./logger");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(express.json());
app.use("/student", student_router);

let atlasUrl ="";
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  logger.info("Database Connected successfully");
});

const PORT = process.env.PORT || 8080;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
