import express from "express";
import {logger} from "../utils/logger";
import { Request, Response } from 'express'
import expressSession from 'express-session'
import { Client } from 'pg'
import { checkPassword, hashPassword } from "../hash";
import path from "path";

export const client = new Client({
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
})

client.connect()

const PORT = 8080;

const app = express();
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

// ----- Register -----

app.post('/register', async (req, res) => {
	const { username, password } = req.body
	console.log(username)

	const isExistAcc = await client.query(
		`select * from customer where username = $1`,
		[username]
	)

	const isExistAccRows = isExistAcc.rows

	console.log(isExistAccRows)

	if (username && password && isExistAccRows.length === 0) {
		let time = new Date().toISOString()
		console.log('no exist acc')
		let hashed = await hashPassword(password)
		await client.query(
			/*SQL*/
			`
			INSERT INTO users (username, passwords, sign_up_date)
			VALUES ($1, $2, $3)
			`,
			[username, hashed, time]
		)

		if (req.session) {
		}
		req.session['user'] = {
			username
		}
		res.redirect('/')
	} else {
		res.status(400).json({ message: 'Invalid Email or Password!!!' })
	}
})

// ----- logIn -----

app.post('/login',async (req: Request, res: Response) => {
	const { username, password } = req.body
	const customerRows = (
		await client.query(`select * from customer where username = $1`,[username])
	).rows

	if (!customerRows[0]) {
		console.log('no exist acc', req.session['user'])
		return res.status(401).json({ message: '你個嘢壞咗！！' })
	}
	const match = await checkPassword(
		password,
		customerRows[0]['password_hash']
	)

	if (match) {
		if (req.session) {
			req.session['user'] = {
				username: customerRows[0]['email']
			}
			console.log('Acc & Pw is match', req.session['user'])
			return res.status(200).json({ message: '成功登入！！' })
		}
	}

	console.log('PW Wrong', req.session['user'])
	return res.status(400).json({ message: '你個野壞！！' })
})

// ----- The line to serve static files -----
app.use(express.static(path.join(__dirname, 'public','html')))

app.listen(PORT, () => {
logger.info(`listening to PORT: ${PORT}`);
})

