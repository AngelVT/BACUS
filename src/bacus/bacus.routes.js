import { Router } from "express";
import * as bacusControl from './bacus.controller.js';

const router = Router();

router.get('/bacus/search/:value/in/:parameter', bacusControl.search);

router.get('/bacus/search/:value', bacusControl.searchText);

router.get('/bacus/pdf/key/:key', bacusControl.getPDF)

export default router;