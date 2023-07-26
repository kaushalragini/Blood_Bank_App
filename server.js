const express = require("express");
const { router } = require("./routes/testRoutes");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
// run object
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// routes

app.use("/v1/api", router);

// port
const PORT = process.env.PORT || 8080;
// listen
app.listen(PORT, () => {
  console.log(`running in ${process.env.DEV_MODE} at port ${process.env.PORT}`.rainbow);
});
