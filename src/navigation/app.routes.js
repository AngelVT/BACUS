import { Router } from "express";
import * as appControl from "./app.controller.js";

const router = Router();

router.get('/bacus', appControl.goMain);

export default router;