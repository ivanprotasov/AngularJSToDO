angular
  .module('app').factory('toDoService', function ($http) {
    var API = '//localhost:3000/todos/';
    function getToDos() {
      return $http({
        method: 'GET',
        url: API
      }).then(function (response) {
        return response.data.splice(0,5)
      })
    }

    function removeToDo(index) {
      if (!index){
        return false
      }
      return $http({
        method: 'DELETE',
        url: API + index
      }).then(function (response) {
        console.log(response)
        return response.data;
      })
    }

    function addToDo(item) {
      return $http({
        method: 'POST',
        data: item,
        url: API
      }).then(function (response) {
        console.log(response)
        return response.data;
      })
    }

    return {
      getToDos: getToDos,
      removeToDo: removeToDo,
      addToDo: addToDo
    }
})
