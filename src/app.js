import express from "express";
import cors from 'cors';
import bacusRoutes from "./bacus/bacus.routes.js";
import appRoutes from "./navigation/app.routes.js";
import path from 'path';
import { __dirname } from "./path.configuration.js";
import { createExtensions } from "./configuration/database-defaults.js";

createExtensions();

const app = express();

app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'resources', 'public')));

app.use('/app', appRoutes);

app.use('/api', bacusRoutes);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'resources', 'public', '404.html'));
});

export default app;