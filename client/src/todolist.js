angular.module('todo-view')
.component('todoList', {
  bindings: {
    todo: '<',
    delete: '<'
  },

  controller: function () {

  },


  template:`
    <div class="todo-list">
      <ul class="entry">
        <todo-list-entry
          ng-repeat="entry in $ctrl.todo"
          entry="entry"
          delete="$ctrl.delete"
          >
        </todo-list-entry>
      </ul>
    </div>
  `
})
