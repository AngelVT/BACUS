import { DataTypes } from "sequelize";
import { pool } from "../configuration/database.config.js";

export const BACUS = pool.define(
    'table_bacus', {
    general_use: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    specific_use: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    activity_businessLine: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    magnitude: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    H0_5: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H1_5: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H2_5: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H3: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H3_5: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H4: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    H5: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MI: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CUMB: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CUMM: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IB: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IM: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IG: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EU: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IU: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RT: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AT: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AI: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CRA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PH: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    VMR: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AIU: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EIU: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AIV: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EIA: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    EIS: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DAP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PRC: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}
);