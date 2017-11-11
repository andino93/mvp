angular.module('todo-view')
.component('todoList', {
  bindings: {
    todo: '<'
  },

  controller: function () {

  },


  template:`
    <div class="todo-list">
      <ul class="entry">
        <todo-list-entry
          ng-repeat="entry in $ctrl.todo"
          entry="entry"
          >
        </todo-list-entry>
      </ul>
    </div>
  `
})
