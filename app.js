require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: ${x.connections[0].name}`)
  )
  .catch((err) => console.log("error connecting to Mongo", err));

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3001", "https://alambic.herokuapp.com/"],
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const clientsRouter = require("./routes/clients");
const hotelsRouter = require("./routes/hotels");
const restaurantsRouter = require("./routes/restaurants");
const experiencesRouter = require("./routes/experiences");
const inquiriesRouter = require("./routes/inquiries");
const transportsRouter = require("./routes/transports");
const reservationsRouter = require("./routes/reservations");
const authRouter = require("./routes/auth");
app.use("/api/", indexRouter);
app.use("/api/", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/clients", clientsRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/restaurants", restaurantsRouter);
app.use("/api/experiences", experiencesRouter);
app.use("/api/inquiries", inquiriesRouter);
app.use("/api/transports", transportsRouter);
app.use("/api/reservations", reservationsRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
