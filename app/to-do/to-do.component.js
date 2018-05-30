function toDo() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: 'app/to-do/to-do.component.html'
  }
}

angular.module('app')
  .directive('toDo', toDo);
