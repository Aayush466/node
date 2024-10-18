import {Router} from "router "
export const router = Router()

router.route("/register").post(registerUser)