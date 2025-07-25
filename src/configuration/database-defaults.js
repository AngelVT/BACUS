import { pool } from "./database.config.js";

export const createExtensions = async () => {
    try {
        await pool.query('CREATE EXTENSION IF NOT EXISTS unaccent');
    } catch (error) {
        console.log('Error creating extensions');
        console.log(error);
    }
}