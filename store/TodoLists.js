const mongoose = require('mongoose')

const todoListSchemma = new mongoose.Schema({
    id:{
        type: Number
    },
    userName: {
        type: String
    },
    description: {
        type: String
    },
})

const TodoList = mongoose.model('TodoList', todoListSchemma)

module.exports = {
    async getByUserNameTodoList(username){
            return await TodoList.find({userName:username});
    }
    ,
    async getByIdTodoList(idTodoList){
        return await TodoList.findOne({id:idTodoList});
    }
    ,
    async insert(idData,userNameData,descriptionData) {
        return await TodoList.create({id:idData,userName:userNameData,description:descriptionData});
    },
    async update(idData,userNameData,descriptionData) {
        return await TodoList.update({id:idData,userName:userNameData,description:descriptionData});
    },
    async delete(idData) {
        return await TodoList.deleteOne({id:idData});
    },
    async getProxId() {
        var todoList = await TodoList.find({})
        .sort({"id" : -1})
        .limit(1);
        if(todoList.length==0){
            return 0;
        }else{
            return todoList[0].id + 1;
        }
    },

}