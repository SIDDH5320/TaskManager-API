// taskController.js

const Task = require('../models/Task');

module.exports = {
  async createTask(req, res) {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getTaskById(req, res) {
    try {
      const task = await Task.findById(req.params.taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async updateTask(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteTask(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.taskId);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
