import express from "express";
import { shouldBeAdmin, shouldBeLogin } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/should-be-log", shouldBeLogin);

router.get("/should-be-admin", shouldBeAdmin);


export default router;
