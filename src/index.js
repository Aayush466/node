import {connectDB} from '../db/index.js'
import dotenv from 'dotenv'
import {app} from './app'
dotenv.config({
    path:'./.env',
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT)
    console.log("server is connected ")
})
.catch((error)=>{
    console.log("problem in connection with server ",error)
})