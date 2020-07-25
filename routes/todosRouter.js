const express = require('express');
const router = express.Router();
const Todos = require('../store/Todos');
const TodoLists = require('../store/TodoLists');

router.post( '/' , (req, res) => {
    var idTodoList = req.body.idTodoListEdit;
    Todos.getByIdTodoList(idTodoList)
    .then(async function(todos) {   
        res.render('todos', { todos,idTodoList});
      })
  });

  router.post( '/update' , (req, res) => {
    var idTodo =req.body.idTodo;

    Todos.getByIdTodo(idTodo)
    .then(async function(todo) {   
        res.render('todosEdit', {todo});
      })
  });

  router.post( '/insert' , async (req, res) => {
    var userName = req.body.userNameInsert;
    var description = req.body.descriptionInsert;
    var done = req.body.doneInsert;
    var idTodoList = req.body.idTodoListInsert;

    if (done=='on'){
      done = true;
    }else{
      done = false;
    }

    var proxId = await Todos.getProxId();

    await Todos.insert(proxId,description,done,idTodoList);
    res.send("Todo object inserted sucessfully!");
});

router.post( '/update/updateAction' , async (req, res) => {
  var idTodo = req.body.idUpdate;
  var description = req.body.descriptionUpdate;
  var done = req.body.doneUpdate
  var idTodoListUpdate = req.body.idTodoListUpdate;

  if (done=='on'){
    done = true;
  }else{
    done = false;
  }

  await Todos.update(idTodo,description,done,idTodoListUpdate);
  res.send("Todo object updated sucessfully!");
});

router.post( '/delete' , async (req, res) => {
  var id = req.body.idTodo;
  await Todos.delete(id);
  res.send("Todo object deleted sucessfully!");
});


module.exports = router;
