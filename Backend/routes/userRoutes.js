import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
//controllers
//middlewares
const router = express.Router();

router.route("/").post(createUser);
router.post('/auth', loginUser)

export default router