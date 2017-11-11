// angular module
angular.module('todo-view', [])
.component('app', {
  controller: function(server) {
    this.todoList = ['drink coffee', 'drink beer', 'eat food', 'clean things']

    this.getFromServer = (endpoint) => {
      server.get(endpoint)
      .then(response => console.log(response))
      .catch(err => console.error(err))
    }
  },

  template: `
    <div class="appview">
      <button ng-click="$ctrl.getFromServer('photo')" class="button">click me</button>
      <daily-image></daily-image>
      <todo-list todo="$ctrl.todoList"></todo-list>
    </div>
  `
})
