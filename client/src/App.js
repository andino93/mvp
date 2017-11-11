// angular module
angular.module('todo-view', [])
.component('app', {
  controller: () => {
    console.log('hello')
  },

  template: `
    <div class="appview">
      <daily-image></daily-image>
    </div>
  `
})
