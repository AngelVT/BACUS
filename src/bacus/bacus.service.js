import * as bacusRepo from './bacus.repo.js';

export async function requestSearch(parameter, value) {
    if (!parameter || !value) {
        return {
            status: 400,
            data: {
                msg: "Missing information for search."
            },
            log: 'Missing information for search'
        };
    }

    const SEARCH = await bacusRepo.findByFieldSearch(parameter, value);

    if (SEARCH == null || SEARCH.length == 0) {
        return {
            status: 404,
            data: {
                msg: `No matching results, for ${value} in ${parameter}.`
            },
            log: `No matching results, for ${value} in ${parameter}`
        };
    }

    return {
        status: 400,
        data: {
            results: SEARCH
        },
        log: `Search for ${value} in ${parameter} request successful`
    };
}