const mongoose = require('mongoose')

// define the task model
const taskModel = mongoose.Schema({
    id: { type: 'number', required: true },
    name: { type: 'string', required: true },
    archived: { type: 'boolean', required: true },
})

module.exports = mongoose.model('Task', taskModel);