import express from 'express '
import cookieParser from 'cookie-parser'
export const app= express()

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded())

app.use(cookieParser())

import {router} from "./routes/user.router.js"

app.use('/', router)