// angular module
angular.module('todo-view', [])
.component('app', {
  controller: function(server) {
    this.todoList = []
    this.input = ''

    this.editTodo = (options) => {
      server.editTodo(options)
      .then(response => console.log(response))
      .catch(err => console.error(err))
    }

    this.addTodoEntry = (input) => {
      let newTodo = {
        task: input,
        isDone: false
      }

      console.log(newTodo)
      server.addTodo(newTodo)
      .then(response => this.getTodos())
      .then(() => this.input = '')
      .catch(err => console.error(err))
    }

    this.removeTodoEntry = todoItem => {
      console.log(todoItem)
      server.removeTodo(todoItem)
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
    <div class="appview">
      <daily-image></daily-image>
      <input type="text" ng-model="$ctrl.input"></input>
      <button ng-click="$ctrl.addTodoEntry($ctrl.input)">add</button>
      <todo-list todo="$ctrl.todoList" delete="$ctrl.removeTodoEntry"></todo-list>
    </div>
  `
})
