import Sequelize from 'sequelize';
import { sequelize } from '../utils/database.js';

export const Todo = sequelize.define('Todo', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  done: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
