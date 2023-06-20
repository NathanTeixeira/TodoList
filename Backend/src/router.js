const express = require('express');

const router = express.Router();

const taskController = require('./controllers/taskController');
const taskMiddleware = require('./middlewares/taskMiddleware');

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateBody, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id',
    taskMiddleware.validateBody,
    taskMiddleware.validateBodyStatus,
    taskController.updateTask
);

module.exports = router;