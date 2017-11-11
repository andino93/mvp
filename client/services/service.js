angular.module('todo-view')
.service('server', function($http) {
  this.get = (endpoint) => {
    return $http.get(`http://localhost:3000/${endpoint}`)
  }

  this.editToDo = (options) => {
    return $http.put('http://localhost:3000/todo/')
  }

  this.addToDo = (options) => {
    return $http.post('http://localhost:3000/todo')
  }
})
