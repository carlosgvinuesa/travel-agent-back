require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

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
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/clients", clientsRouter);
app.use("/hotels", hotelsRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/experiences", experiencesRouter);
app.use("/inquiries", inquiriesRouter);
app.use("/transports", transportsRouter);
app.use("/reservations", reservationsRouter);

module.exports = app;
