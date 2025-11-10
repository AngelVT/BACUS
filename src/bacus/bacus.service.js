import * as bacusRepo from './bacus.repo.js';
import { generateBacusReportDefinition } from './PDF-definitions/bacus.report.js';

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
                msg: `No matching results, for "${value}" in ${parameter}.`
            },
            log: `No matching results, for "${value}" in ${parameter}`
        };
    }

    return {
        status: 200,
        data: {
            results: SEARCH
        },
        log: `Search for "${value}" in ${parameter} request successful`
    };
}

export async function requestTextSearch(value) {
    if (!value) {
        return {
            status: 400,
            data: {
                msg: "Missing information for search."
            },
            log: 'Missing information for search'
        };
    }

    const SEARCH = await bacusRepo.findByTextSearch(value);

    if (SEARCH == null || SEARCH.length == 0) {
        return {
            status: 404,
            data: {
                msg: `No matching results, for "${value}".`
            },
            log: `No matching results, for "${value}"`
        };
    }

    return {
        status: 200,
        data: {
            results: SEARCH
        },
        log: `Search for "${value}" request successful`
    };
}

export async function requestPDF(key) {
    if (!key) {
        return {
            status: 400,
            data: {
                msg: "Missing information for PDF report."
            },
            log: 'Missing information for search PDF report'
        };
    }

    const underscoredKey = key.replaceAll('.', '_');

    const [permitted, conditioned] = await bacusRepo.findKeyBusinessLines(underscoredKey);

    const pdfDefinition = generateBacusReportDefinition(permitted, conditioned, underscoredKey)

    return {
        status: 200,
        definition: pdfDefinition,
        log: `Search for "${key}" PDF report request successful`
    };
}