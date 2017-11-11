angular.module('todo-view')
.component('dailyImage', {
  controller: function () {
    console.log('daily image')
  },


  template: `
    <div class="unsplash">
      <img ng-src="https://images.unsplash.com/photo-1509823355042-c45de2e32391?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=93b3af8c4d35bb1851f33bef684fc1fd">
    </div>
  `
})
