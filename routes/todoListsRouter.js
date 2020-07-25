const express = require('express');
const router = express.Router();
const Todos = require('../store/Todos');
const TodoLists = require('../store/TodoLists');

router.get( '/:userName' , (req, res) => {
    var userName = req.params.userName;
    TodoLists.getByUserNameTodoList(userName)
    .then(async function(todoLists) {   
        res.render('todoLists', { todoLists,userName});
      })
  });

  router.post( '/update' , (req, res) => {
    var idTodoList =req.body.idTodoList;

    TodoLists.getByIdTodoList(idTodoList)
    .then(async function(todoList) {   
        res.render('todoListsEdit', {todoList});
      })
  });

  router.post( '/insert' , async (req, res) => {
    var userName = req.body.userNameInsert;
    var description = req.body.descriptionInsert;
    var proxId = await TodoLists.getProxId();

    await TodoLists.insert(proxId,userName,description);
    res.send("Todo List inserted sucessfully!");
});

router.post( '/update/updateAction' , async (req, res) => {
  var idTodoList = req.body.idUpdate;
  var description = req.body.descriptionUpdate;
  var userName =req.body.userNameUpdate;

  await TodoLists.update(idTodoList,userName,description);
  res.send("Todo List updated sucessfully!");
});

router.post( '/delete' , async (req, res) => {
  var id = req.body.idTodoListDelete;
  await Todos.deleteByIdTodoList(id);
  await TodoLists.delete(id);
  res.send("Todo List deleted sucessfully!");
});


module.exports = router;
