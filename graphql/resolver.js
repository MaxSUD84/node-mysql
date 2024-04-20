import { Todo } from '../models/todo.js';

const users = [
  {
    name: 'Elena',
    age: 24,
    email: 'elena@mail.ru',
  },
  {
    name: 'Irina',
    age: 27,
    email: 'irina@mail.ru',
  },
];

export default {
  test() {
    return {
      count: users.length,
      users,
    };
  },
  random({ min, max, count }) {
    const arr = [];
    for (let index = 0; index < count; index++) {
      arr.push(Math.random() * (max - min) + min);
    }
    return arr;
  },
  addTestUser({ user }) {
    const _user = {
      ...user,
      age: Math.ceil(this.random({ min: 2, max: 90, count: 1 })[0]),
    };
    users.push(_user);
    return _user;
  },
  async getTodos() {
    try {
      return Todo.findAll();
    } catch (error) {
      throw new Error('Fetch todos is not available');
    }
  },
  async createTodo({ todo }) {
    try {
      return await Todo.create({
        title: todo.title,
        done: false,
      });
    } catch (error) {
      throw new Error('Title is required');
    }
  },
  async completeTodo({ id }) {
    try {
      const todo = Todo.findByPk(id);
      todo.done = true;
      await todo.save;
      return todo;
    } catch (e) {
      throw new Error('Id is required');
    }
  },
  async deleteTodo({ id }) {
    try {
      const todos = await Todo.findAll({
        where: { id },
      });
      await todos[0].destroy();
      return true;
    } catch (e) {
      throw new Error('Id is required');
      return false;
    }
  },
};
