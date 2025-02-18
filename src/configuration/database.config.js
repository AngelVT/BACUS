import { Sequelize } from "sequelize";

const {
    BACUS_DB_PORT,
    BACUS_DB_HOST,
    BACUS_DB_DIALECT,
    BACUS_DB_DATABASE,
    BACUS_DB_USER,
    BACUS_DB_PASSWORD,
    BACUS_DB_TIMEZONE
} = process.env;

export const pool =  new Sequelize(BACUS_DB_DATABASE, BACUS_DB_USER, BACUS_DB_PASSWORD, {
    host: BACUS_DB_HOST,
    port: BACUS_DB_PORT,
    dialect: BACUS_DB_DIALECT,
    logging: false,
    timezone: BACUS_DB_TIMEZONE
});