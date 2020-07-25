const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://renan:Loler123@cluster0-j4ubb.mongodb.net/todos?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}