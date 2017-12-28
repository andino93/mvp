angular.module('todo-view')
.service('server', function($http) {
  this.get = (endpoint) => {
    return $http.get(`/${endpoint}`)
  }

  this.editTodo = (options) => {
    return $http.put(`/todo/`, options)
  }

  this.post = (endpoint, options) => {
    return $http.post(`/${endpoint}`, options)
  }

})
