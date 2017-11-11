angular.module('todo-view')
.component('dailyImage', {
  bindings: {

  },

  controller: function (server) {
    this.image = ''
    this.getNewImage = () => {
      server.get('photo')
      .then(({data}) => this.image = JSON.parse(data)[0].urls.small)
      .catch(err => console.error(err))
    }

    this.$onInit = () => {
      this.getNewImage()
    }
  },


  template: `
    <div class="unsplash">
      <img ng-click="$ctrl.getNewImage()" ng-src={{$ctrl.image}}>
    </div>
  `
})
