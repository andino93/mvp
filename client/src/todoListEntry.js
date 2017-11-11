angular.module('todo-view')
.component('todoListEntry', {
  bindings: {
    entry: '<',
    delete: '<'
  },

  controller: function() {
    this.input = ''

    this.checkedOff = () => {
      this.entry.isDone = !this.entry.isDone
    }
  },


  template:`
    <div ng-class="$ctrl.entry.isDone ? 'entry-item done' : 'entry-item'">
      <button ng-click="$ctrl.delete($ctrl.entry)" class="remove">x</button>
      <input
        ng-click="$ctrl.checkedOff()"
        type="checkbox"
        ng-checked="$ctrl.entry.isDone"
        >
      {{$ctrl.entry.task}}
    </div>
  `
})
