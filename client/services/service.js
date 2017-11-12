angular.module('todo-view')
.service('server', function($http) {
  this.get = (endpoint) => {
    return $http.get(`http://localhost:3000/${endpoint}`)
  }

  this.editTodo = (options) => {
    return $http.put('http://localhost:3000/todo/', options)
  }

  this.post = (endpoint, options) => {
    return $http.post(`http://localhost:3000/${endpoint}`, options)
  }
})
