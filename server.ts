import dotenv from "dotenv";
dotenv.config();

import express from "express";
import {logger} from "./utils/logger";
// import { Request, Response } from 'express'
import expressSession from 'express-session'
// import pg from 'pg'
// import { checkPassword, hashPassword } from "./utils/hash";
import path from "path";
import http from 'http';
import {Server as SocketIO} from 'socket.io';


import Knex from "knex";
import knexConfig from "./knexfile"; 

export const knex = Knex(knexConfig[process.env.NODE_ENV ?? "development"]);

// export const dbclient = new pg.Client({
// 	database: process.env.DB_NAME,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASS
// })
// dbclient.connect()

const app = express();
const server = new http.Server(app);
const io = new SocketIO(server);

io.on('connection', function (socket) {
  console.log(socket);
});
// ----- Need this for form submissions -----
app.use(express.urlencoded({ extended: true }))
// ----- To read json files -----
app.use(express.json())

// ----- For expressSession -----
app.use(
	expressSession({
		secret: Math.random().toString(32).slice(2),
		resave: true,
		saveUninitialized: true
	})
)
app.post('/hi',async (req , res , next) => {
	console.log(req.body)
	console.log(`${req.body.name}`+ " "+"left!!!!!")
	next()
})
// ----- For debug -----
app.use((req, res, next) => {
	logger.debug(`Path: ${req.path},,, Method: ${req.method}`);
	next();
  }); 

// ----- Connect to server ----- //

import { UserService } from "./service/UserService";
import { UserController } from "./controller/UserController";

const userService = new UserService(knex);
export const userController = new UserController(userService);

import { userRoutes } from "./router/userRoutes";
app.use("/user", userRoutes )



// ----- Register -----

// app.post('/register', async (req, res) => {
// 	const { username, password } = req.body
// 	console.log(username)

// 	const isExistAcc = await dbclient.query(
// 		`select * from customer where username = $1`,
// 		[username]
// 	)

// 	const isExistAccRows = isExistAcc.rows

// 	console.log(isExistAccRows)

// 	if (username && password && isExistAccRows.length === 0) {
// 		let time = new Date().toISOString()
// 		console.log('no exist acc')
// 		let hashed = await hashPassword(password)
// 		await dbclient.query(
// 			/*SQL*/
// 			`
// 			INSERT INTO users (username, passwords,)
// 			VALUES ($1, $2, $3)
// 			`,
// 			[username, hashed, time]
// 		)

// 		if (req.session) {
// 		}
// 		req.session['user'] = {
// 			username
// 		}
// 		res.redirect('/')
// 	} else {
// 		res.status(400).json({ message: 'Invalid Email or Password!!!' })
// 	}
// })

// ----- logIn -----

// app.post('/login',async (req: Request, res: Response) => {
// 	const { username, password } = req.body
// 	const customerRows = (
// 		await dbclient.query(`select * from customer where username = $1`,[username])
// 	).rows

// 	if (!customerRows[0]) {
// 		console.log('no exist acc', req.session['user'])
// 		return res.status(401).json({ message: '你個嘢壞咗！！' })
// 	}
// 	const match = await checkPassword(
// 		password,
// 		customerRows[0]['password_hash']
// 	)

// 	if (match) {
// 		if (req.session) {
// 			req.session['user'] = {
// 				username
// 			}
// 			console.log('Acc & Pw is match', req.session['user'])
// 			return res.status(200).json({ message: '成功登入！！' })
// 		}
// 	}

// 	console.log('PW Wrong', req.session['user'])
// 	return res.status(400).json({ message: '你個野壞！！' })
// })



// ----- The line to serve static files -----
app.use(express.static(path.join(__dirname, 'public')))

// ----- 404 Not Found -----
app.use((req, res) => {
	res.sendFile(path.join(__dirname, "public", "404.html"));
  });
  
const PORT = 8080;
server.listen(PORT, () => {
logger.info(`listening to PORT: ${PORT}`);
})

