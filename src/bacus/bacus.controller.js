import * as bacusService from './bacus.service.js';
import { printerPDF } from '../utils/pdf.utilities.js';

export const search = async (req, res) => {
    try {
        const PARAM = req.params.parameter;
        const VALUE = req.params.value;
        const response = await bacusService.requestSearch(PARAM, VALUE);

        res.status(response.status).json(response.data);

        console.log(response.log)
    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
        console.error(error);
    }
}

export const searchText = async (req, res) => {
    try {
        const VALUE = req.params.value;
        const response = await bacusService.requestTextSearch(VALUE);

        res.status(response.status).json(response.data);

        console.log(response.log)
    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
        console.error(error);
    }
}

export const getPDF = async (req, res) => {
    try {
        const key = req.params.key;

        const response = await bacusService.requestPDF(key);

        if (response.definition) {
            const pdfDoc = printerPDF.createPdfKitDocument(response.definition)

            res.setHeader('Content-Type', 'application/pdf');
            //res.setHeader("Content-Disposition", `attachment; filename=Resumen de giros y actividades de uso ${key}`);
            pdfDoc.info.Title = `Resumen de giros y actividades de uso ${key}`;
            pdfDoc.pipe(res);
            pdfDoc.end();
        } else {
            res.status(response.status).json(response.data);
        }

        console.log(response.log)
    } catch (error) {
        res.status(500).json({msg: "Internal server error"});
        console.error(error);
    }
}