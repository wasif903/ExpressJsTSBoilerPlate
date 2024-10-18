import express, { Request, Response } from "express"
import { HandleSignup } from "../controllers/AuthController";

const router = express.Router();

router.post("/signup", HandleSignup)


export default router;