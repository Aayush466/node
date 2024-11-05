import {connectDB} from './db/index.js'
import dotenv from 'dotenv'
import {app} from './app.js'
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT)
    console.log(`server side port is connected to ${process.env.PORT}`)
})
.catch((error)=>{
    console.log(`connection error to port ${process.env.PORT}`,error)
})