angular.module('todo-view')
.component('todoList', {
  bindings: {
    todo: '<',
    delete: '<',
    edit: '<'
  },

  controller: function () {

  },


  template:`
    <div class="todo-list">
      <div class="entry">
        <todo-list-entry
          ng-repeat="entry in $ctrl.todo"
          entry="entry"
          delete="$ctrl.delete"
          edit="$ctrl.edit"
          >
        </todo-list-entry>
      </div>
    </div>
  `
})
