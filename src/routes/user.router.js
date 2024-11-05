import {Router} from 'express'
import {signUp} from '../controllers/user.controllers.js'
export const router = express()

router.route('/signIn').post(signUp)