import { Router } from "express";
import * as bacusControl from './bacus.controller.js';

const router = Router();

router.get('/bacus/search/:value/in/:parameter', bacusControl.search);

export default router;