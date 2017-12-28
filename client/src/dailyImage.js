angular.module('todo-view')
.component('dailyImage', {

  controller: function (server) {
    this.image = ''
    this.photoSet = []
    this.getNewImage = () => {
      server.get('photo')
      .then(({data}) => this.photoSet.unshift(this.image = JSON.parse(data)[0].urls.regular))
      .then(() => this.image = this.photoSet[0] )
      .catch(err => console.error(err))
    }

    // this.changeImage = (direction) => {
    //   direction === 'back' ?
    // }

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
