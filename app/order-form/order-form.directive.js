function orderForm() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      data: '=',
      submit: '&'
    },
    controller: function () {
      this.products = [
        {
          label: 'Product One',
          id: 1
        },
        {
          label: 'Product Two',
          id: 2
        },
        {
          label: 'Product Three',
          id: 3
        },
      ]
      this.onSubmit = function () {
        this.submit();
      }
    },
    controllerAs: "form",
    templateUrl: 'app/order-form/order-form.directive.html'
  }
}

angular
  .module('app')
  .directive('orderForm', orderForm);
