function toDo() {
  return {
    restrict: 'E',
    scope: {},
    controller: function (toDoService) {
      var ctrl = this;
      ctrl.newItem = "";
      ctrl.mainData = [];
      ctrl.editableData = [];
      toDoService.getToDos().then(function (data) {
        if (data) {
          ctrl.mainData = data;
          ctrl.editableData = angular.copy(ctrl.mainData);
        }
      });

      this.removeItem = function (index) {
        var id = ctrl.editableData[index].id;
        toDoService.removeToDo(id).then(function (data) {
          if (data) {
            ctrl.mainData.splice(index,1);
            ctrl.editableData = angular.copy(ctrl.mainData);
          }
        });
      };

      this.addItem = function () {
        toDoService.addToDo({
          title: ctrl.newItem,
          completed: false
        }).then(function (item) {
          if (item) {
            ctrl.mainData.push(item);
            ctrl.editableData = angular.copy(ctrl.mainData);
          }
        });
        ctrl.newItem = "";
      };

      this.editItem = function (item) {
        ctrl.editableData = angular.copy(ctrl.mainData);
        toDoService.editToDo(item).then(function (data) {
          if (data) {
            var item = ctrl.mainData.find(function (value) { return value.id === data.id });
            item.title = data.title;
            item.completed = data.completed;
            ctrl.editableData = angular.copy(ctrl.mainData);
          }
        });
      }
    },
    controllerAs: "ctrl",
    templateUrl: 'app/to-do/to-do.component.html'
  }
}

angular.module('app')
  .directive('toDo', toDo);
