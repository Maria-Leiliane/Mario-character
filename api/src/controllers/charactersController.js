const charactersModel = require('../models/charactersModel');
const _ = require('lodash');

// Função para mapear e minimizar os dados dos personagens
const mapCharacter = ({ id, name, age, description, created_at, catchphrase }) => ({
    id: parseInt(id, 10),
    name,
    age: parseInt(age, 10),
    description,
    created_at,
    catchphrase
});

const getAll = async (_req, res) => {
    try {
        let characters = await charactersModel.getAll();
  
        // Filtrar personagens com menos de 40 anos
        const filteredCharacters = _.filter(characters, character => character.age < 40);
  
        // Aplicar a função de mapeamento para cada personagem filtrado
        const mappedAndFilteredCharacters = _.map(filteredCharacters, mapCharacter);
  
        res.status(200).json(mappedAndFilteredCharacters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAll,
};