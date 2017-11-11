angular.module('todo-view')
.component('todoListEntry', {
  bindings: {
    entry: '<'
  },


  template:`
    <div class="entry-item">
      {{$ctrl.entry}}
    </div>
  `
})
