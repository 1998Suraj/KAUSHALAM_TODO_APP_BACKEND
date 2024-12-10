const express = require('express');
const { getTasks, createTask, updateTask, deleteTask, completeTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.patch('/:id', completeTask);
router.delete('/:id', deleteTask);

module.exports = router;
