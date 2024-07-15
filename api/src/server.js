const app = require('./app'); // Importe o app

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});

