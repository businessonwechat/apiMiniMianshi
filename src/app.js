/**
 * app.js
 *
 * Author: Henry
 * Created at: 2021-05-30
 */

import express from 'express'
import session from 'express-session'

import login from './routes/login.js'

import dotenv from 'dotenv'
dotenv.config()

import postgres from './utils/postgres.js'
postgres()

const app = express()

app.use('/api/v1/login', login)

process.on('uncaughtException', function(err) {
  console.log('error uncatughet: ', err)
})

export default app
