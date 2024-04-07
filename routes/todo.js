import { Router } from 'express';
import { Todo } from '../models/todo.js';

const router = Router({});

// Получение списка задач
router.get('/', async (req, res) => {
  try {
    const todos = (await Todo.findAll()).map((el) => el.dataValues);
    // console.log(todos.map((el) => el.dataValues));
    res.status(200).json({ todos });
  } catch (error) {
    console.log(error);
    res.status(500).statusMessage('Server error');
  }
});

// Создание списка задач
router.post('/', async (req, res) => {
  // console.dir(req.body);
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server error',
      error,
    });
  }
});

// Изменение задачи по id
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    todo.done = req.body.done;
    await todo.save();
    res.status(200).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).statusMessage('Server error');
  }
});

// Удаление задачи
router.delete('/:id', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: {
        id: +req.params.id,
      },
    });
    const todo = todos[0];
    if (todo) {
      await todo.destroy();
      res.status(204).json({});
      return;
    }
    res.status(500).statusMessage(`Fail delete Todo (${req.params.id})`);
  } catch (error) {
    console.log(error);
    res.status(500).statusMessage('Server error');
  }
});

export default router;
