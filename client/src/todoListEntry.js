angular.module('todo-view')
.component('todoListEntry', {
  bindings: {
    entry: '<',
    delete: '<',
    edit: '<'
  },

  controller: function() {
    this.input = ''
    this.show = false

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
      <span ng-hide"editing" ng-click="editing = true">
        {{$ctrl.entry.task}}
      </span>
      <form ng-show="editing" ng-submit="editing = false">
      <input type="text" ng-model="$ctrl.entry.task" ng-required/>
      <button ng-click="$ctrl.edit($ctrl.entry)"class="btn" type="submit">Save</button>
      <button class="btn" type="submit" ng-submit="editing = false">Cancel</button>
    </form>
    </div>
  `
})
