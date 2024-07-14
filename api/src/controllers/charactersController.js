const charactersModel = require('../models/charactersModel');

const getAll = async (_req, res) => {
    const characters = await charactersModel.getAll();

   return res.status(200).json(characters);
}   

module.exports = {
    getAll
};