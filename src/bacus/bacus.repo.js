import { BACUS } from "../models/bacus.model.js";
import { Op } from "sequelize";

export async function findByFieldSearch(parameter, value) {
    const PARAM = new Object;
    PARAM[parameter] = { [Op.like]: `%${value}%` };
    return await BACUS.findAll({
        where: PARAM,
        raw: true,
        nest: true
    });
}