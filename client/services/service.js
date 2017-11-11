angular.module('todo-view')
.service('server', function($http) {
  this.get = (endpoint) => {
    return $http.get(`http://localhost:3000/${endpoint}`)
  }

  this.editToDo = () => {
    return $http.post('http://localhost:3000/todo/edit')
  }

  this.addToDo = () => {
    return $http.post('http://localhost:3000/todo')
  }
})
