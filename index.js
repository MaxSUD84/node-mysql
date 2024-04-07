import app from './server.js';
import { config } from 'dotenv-safe';
import { cwd } from 'node:process';
import { sequelize } from './utils/database.js';

const _env = config({
  allowEmptyValues: true,
  example: './.env.example',
});

app.use((req, res, next) => {
  res.sendFile('/index.html');
});

// Запускаем Сервер
(async () => {
  try {
    // await sequelize().sync();
    await sequelize.sync(); // .authenticate()
    console.log('Connection to MySQL has been established successfully.');
    app.listen(_env.required.PORT, () => {
      console.log('Server started on port: localhost:' + _env.required.PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
