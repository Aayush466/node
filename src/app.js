import express from 'express'
import cors from 'cors '
import cookieParser from 'cookie-parser'
export const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,

}))

app.use(express.json({limit:"20kbs"}))
app.use(express.static("public"))
app.use(express.urlencoded({extended:true,limit:"20kbs"}))
app.use(cookieParser())

import {router} from './routes/user.router.js'
app.use('/user',router)


