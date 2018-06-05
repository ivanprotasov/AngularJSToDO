function toDo() {
  return {
    restrict: 'E',
    scope: {},
    controller: function (toDoService) {
      var ctrl = this;
      ctrl.data = [];
      toDoService.getToDos().then(function (data) {
        if (data) {
          ctrl.data = data;
        }
      });

      this.remove = function (index) {
        var id = ctrl.data[index].id;
        toDoService.removeToDo(id).then(function (data) {
          if (data) {
            ctrl.data.splice(index,1);
          }
        });
      }
      this.addItem = function (item) {
        toDoService.addToDo({
          title: item,
          completed: false
        })
      }

      // $scope.$watch(
      //   function () {
      //     return ctrl.data;
      //   },
      //   function (data) {
      //     console.log(data)
      //   },
      //   true
      // );
    },
    controllerAs: "ctrl",
    templateUrl: 'app/to-do/to-do.component.html'
  }
}

angular.module('app')
  .directive('toDo', toDo);
