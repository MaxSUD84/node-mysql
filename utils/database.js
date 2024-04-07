import { Sequelize } from 'sequelize';

const DB_NAME = 'todo';
const DB_USER = 'user';
const DB_PASS = 'user';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  // logging: (...msg) => console.error(msg),
});
