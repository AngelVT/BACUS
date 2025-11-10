import { BACUS } from "../models/bacus.model.js";
import { Op } from "sequelize";
import Sequelize from "sequelize";

function escapeLike(value) {
    return value
        .replace(/\\/g, '\\\\')  // Escape backslashes
        .replace(/%/g, '\\%')    // Escape %
        .replace(/_/g, '\\_');   // Escape _
}

export async function findByFieldSearch(parameter, value) {
    return await BACUS.findAll({
        where: Sequelize.where(
            Sequelize.fn('unaccent',
                Sequelize.cast(Sequelize.col(parameter), 'text')),
            {
                [Op.iLike]: `%${escapeLike(value)}%`
            }
        ),
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
                Sequelize.where(
                    Sequelize.fn('unaccent', Sequelize.cast(Sequelize.col('general_use'), 'text')),
                    { [Op.iLike]: `%${escapeLike(value)}%` }
                ),
                Sequelize.where(
                    Sequelize.fn('unaccent', Sequelize.cast(Sequelize.col('specific_use'), 'text')),
                    { [Op.iLike]: `%${escapeLike(value)}%` }
                ),
                Sequelize.where(
                    Sequelize.fn('unaccent', Sequelize.cast(Sequelize.col('activity_businessLine'), 'text')),
                    { [Op.iLike]: `%${escapeLike(value)}%` }
                ),
                Sequelize.where(
                    Sequelize.fn('unaccent', Sequelize.cast(Sequelize.col('magnitude'), 'text')),
                    { [Op.iLike]: `%${escapeLike(value)}%` }
                )
            ]
        },
        attributes: {
            exclude: ['id', 'createdAt', 'updatedAt']
        },
        raw: true,
        nest: true
    });
}

export async function findKeyBusinessLines(key) {
    const whereClauseP = {};
    const whereClauseO = {};

    whereClauseP[key] = 'P';
    
    const permitted = await BACUS.findAll({
        where: whereClauseP,
        attributes: [key, 'activity_businessLine'],
        raw: true
    });

    whereClauseO[key] = 'O';

    const conditioned = await BACUS.findAll({
        where: whereClauseO,
        attributes: [key, 'activity_businessLine'],
        raw: true
    });

    return [permitted, conditioned];
}