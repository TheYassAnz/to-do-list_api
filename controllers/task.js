const Task = require('../models/Task');

exports.getAllTask = (req, res) => {
    Task.find({ userId: req.auth.userId })
        .then((tasks) => res.status(200).json(tasks))
        .catch((err) => res.status(400).json({ err }));
}

exports.getOneTask = (req, res) => {
    Task.findOne({ _id: req.params.id, userId: req.auth.userId })
        .then((task) => res.status(200).json(task))
        .catch((err) => res.status(400).json({ err }));
}

exports.createTask = (req, res) => {
    // Delete the ID sent by the client
    delete req.body._id;
    // Create an instance and receive POST data
    console.log(req.body)
    const task = new Task({
        ...req.body,
        userId: req.auth.userId
    });
    // Save the thing in the DB
    task.save()
        .then(() => res.status(201).json({ message: 'Object saved successfully!' }))
        .catch(error => res.status(400).json({ error }));
};

exports.updateTask = (req, res) => {
    // console.log(req.params.id)
    Task.updateOne({ _id: req.params.id, userId: req.auth.userId }, { ...req.body })
        .then(() => res.status(200).json({ message: 'Object updated successfully!' }))
        .catch((err) => res.status(400).json({ err }));
}

exports.deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params.id, userId: req.auth.userId })
        .then(() => res.status(200).json({ message: 'Object deleted successfully!' }))
        .catch((err) => res.status(400).json({ err }));
}