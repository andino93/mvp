angular.module('todo-view')
.service('server', function($http) {
  this.get = (endpoint) => {
    return $http.get(`http://localhost:3000/${endpoint}`)
  }

  this.editTodo = (options) => {
    return $http.put('http://localhost:3000/todo/', options)
  }

  this.addTodo = (options) => {
    return $http.post('http://localhost:3000/todo', options)
  }

  this.removeTodo = (options) => {
    return $http.post('http://localhost:3000/todo/delete', options)
  }
})
