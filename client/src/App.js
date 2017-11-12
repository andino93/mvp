// angular module
angular.module('todo-view', [])
.component('app', {
  controller: function(server) {
    this.todoList = []
    this.input = ''

    this.editTodo = (edit) => {
      let options = {
        id: edit._id,
        edit: {
          task: edit.task,
          isDone: edit.isDone
        }
      }
      server.editTodo(options)
      .catch(err => console.error(err))
    }

    this.addTodoEntry = (input) => {
      let newTodo = {
        task: input,
        isDone: false
      }

      server.post('todo', newTodo)
      .then(response => this.getTodos())
      .then(() => this.input = '')
      .catch(err => console.error(err))
    }

    this.removeTodoEntry = todoItem => {
      server.post('todo/delete', todoItem)
      .then(response => this.getTodos())
      .catch(err => console.error(err))
    }

    this.getTodos = () => {
      server.get('todo')
      .then(({data}) => this.todoList = data)
      .catch(err => console.error(err))
    }

    this.$onInit = () => {
      this.getTodos()
    }


  },

  template: `
  <div class="top-bar-thing">Not Just Any To-Do List</div>
    <div class="appview">
      <div class="image">
        <daily-image></daily-image>
      </div>
      <div class="todo-container">
        <div class="todo-title">Todos:</div>
        <div class="addbox">
          <input class="addbox-input" type="text" ng-model="$ctrl.input"></input>
          <button class="add" ng-click="$ctrl.addTodoEntry($ctrl.input)">add</button>
        </div>
        <todo-list todo="$ctrl.todoList" edit="$ctrl.editTodo" delete="$ctrl.removeTodoEntry"></todo-list>
      </div>
    </div>
  `
})
