import { BACUS } from "../models/bacus.model.js";
import { Op } from "sequelize";

export async function findByFieldSearch(parameter, value) {
    const PARAM = new Object;
    PARAM[parameter] = { [Op.like]: `%${value}%` };
    return await BACUS.findAll({
        where: PARAM,
        attributes: {
            exclude: ['id', 'createdAt', 'updatedAt']
        },
        raw: true,
        nest: true
    });
}

export async function findByTextSearch(value) {
    return await BACUS.findAll({
        where: {
            [Op.or]: [
                {general_use: { [Op.like]: `%${value}%` }},
                {specific_use: { [Op.like]: `%${value}%` }},
                {activity_businessLine: { [Op.like]: `%${value}%` }},
                {magnitude: { [Op.like]: `%${value}%` }}
            ]
        },
        attributes: {
            exclude: ['id', 'createdAt', 'updatedAt']
        },
        raw: true,
        nest: true
    });
}