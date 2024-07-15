const connection = require('./connection');

const getAll = async () => {
    const [characters] = await connection.execute(
        'SELECT * FROM characters'
    );
    return characters;
};

module.exports = {
    getAll
};