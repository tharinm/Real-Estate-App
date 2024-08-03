import express from "express";
import { shouldBeAdmin, shouldBeLogin } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-log",verifyToken, shouldBeLogin);

router.get("/should-be-admin", shouldBeAdmin);


export default router;
