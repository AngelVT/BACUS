import * as bacusService from './bacus.service.js';

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