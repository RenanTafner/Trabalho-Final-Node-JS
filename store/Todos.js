const mongoose = require('mongoose')

const todoSchemma = new mongoose.Schema({
    id:{
        type: Number
    },
    idTodoList :{
        type:Number
    },
    description: {
        type: String
    },
    done:{
        type: Boolean
    },
})

const Todo = mongoose.model('Todo', todoSchemma)

module.exports = {
    async getByIdTodoList(idTodoListData){
            return await Todo.find({idTodoList:idTodoListData});
    }
    ,
    async getByIdTodo(idTodo){
        return await Todo.findOne({id:idTodo});
    }
    ,
    async insert(idData,descriptionData,doneData,idTodoListData) {
        return await Todo.create({id:idData,description:descriptionData,done:doneData,idTodoList:idTodoListData});
    },
    async update(idData,descriptionData,doneData,idTodoListData) {
        return await Todo.update({id:idData,description:descriptionData,done:doneData,idTodoList:idTodoListData});
    },
    async delete(idData) {
        return await Todo.deleteOne({id:idData});
    },
    async deleteByIdTodoList(idTodoListData) {
        return await Todo.deleteMany({idTodoList:idTodoListData});
    },
    async getProxId() {
        var todo = await Todo.find({})
        .sort({"id" : -1})
        .limit(1);
        if(todo.length==0){
            return 0;
        }else{
            return todo[0].id + 1;
        }
    },

}