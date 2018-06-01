function toDo() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    controller: function ($scope) {
      this.remove = function (index) {
        $scope.data.splice(index,1)
      }
    },
    controllerAs: "ctrl",
    templateUrl: 'app/to-do/to-do.component.html'
  }
}

angular.module('app')
  .directive('toDo', toDo);
