const express = require('express');
const app = express();

app.use(express.json());

// Dummy data
let tasks = [
    { id: 1, title: "Learn Node", completed: false }
];

// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.get('/', (req, res) => {
    res.send('Task API is running 🚀');
});

// GET task by ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
});

// POST create task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT update task
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: 'Task deleted' });
});

// START SERVER (VERY IMPORTANT)
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});