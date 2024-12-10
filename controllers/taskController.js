const Task = require('../models/task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId.id });
    console.log("Task: ", tasks);
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const dueDate = new Date(); 
    const { title, description, userId } = req.body;
    const task = new Task({ title, description, dueDate, userId: req.user.userId.id});
    await task.save();
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    return res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
