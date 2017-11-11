// angular module
angular.module('todo-view', [])
.component('app', {
  controller: function() {
    this.todoList = ['drink coffee', 'drink beer', 'eat food', 'clean things']
    console.log('hello')
  },

  template: `
    <div class="appview">
      <daily-image></daily-image>
      <todo-list todo="$ctrl.todoList"></todo-list>
    </div>
  `
})
