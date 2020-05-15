const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    task: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;