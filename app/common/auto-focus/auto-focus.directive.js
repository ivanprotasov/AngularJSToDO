angular
  .module('common', [])
  .directive('tdAutoFocus', function ($timeout) {
    function link(scope, element) {
      scope.$watch('tdAutoFocus', function () {
        $timeout(function () {
          element[0].focus();
        });
      });
    }
    return {
      restrict: 'A',
      link: link,
      scope: {
        tdAutoFocus: '='
      }
    }
  })
