import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { logger } from "./utils/logger";
// import { Request, Response } from 'express'
import expressSession from "express-session";
import pg from "pg";
// import { checkPassword, hashPassword } from "./utils/hash";
import path from "path";
import http from "http";
import { Server as SocketIO } from "socket.io";

import Knex from "knex";
import knexConfig from "./knexfile";

export const knex = Knex(knexConfig[process.env.NODE_ENV ?? "development"]);

export const dbclient = new pg.Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});
dbclient.connect();

const app = express();
const server = new http.Server(app);
const io = new SocketIO(server);

// ----- Need this for form submissions -----
app.use(express.urlencoded({ extended: true }));
// ----- To read json files -----
app.use(express.json());

// ----- For expressSession -----
app.use(
  expressSession({
    secret: Math.random().toString(32).slice(2),
    resave: true,
    saveUninitialized: true,
  })
);

// LogIn

import { UserService } from "./service/UserService";
import { UserController } from "./controller/UserController";

const userService = new UserService(knex);
export const userController = new UserController(userService);

import { userRoutes } from "./router/userRoutes";
import { isLoggedInStatic } from "./guards";
app.use("/", userRoutes )


//Leaving Detection
import { LeavingDetectionService } from "./service/LeavingDetectionService";
import { LeavingDetectionController } from "./controller/LeavingDetectionController";
const leavingDetectionService = new LeavingDetectionService(knex);
export const leavingDetectionController = new LeavingDetectionController(
  leavingDetectionService,
  io
); //, io
import { leavingDetectionRoutes } from "./router/leavingDetectionRoutes";
app.use("/", leavingDetectionRoutes);
// ----- For debug -----
// app.use((req, res, next) => {
//   logger.debug(`Path: ${req.path},,, Method: ${req.method}`);
//   next();
// });



// ----- The line to serve static files -----
app.use(express.static(path.join(__dirname, "public")));
app.use(isLoggedInStatic, express.static(path.join(__dirname, 'private')))

// ----- 404 Not Found -----
app.use((req, res) => {
  console.log(req.session["elderName"]);

  res.sendFile(path.join(__dirname, "public", "404.html"));
});

const PORT = 8080;

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
	console.log("hi",msg)
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  logger.info(`App running on  http://localhost:${PORT}/socket-demo.html`);
});
