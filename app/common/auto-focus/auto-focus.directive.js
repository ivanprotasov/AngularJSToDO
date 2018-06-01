angular
  .module('common', [])
  .directive('tdAutoFocus', function () {
    function link(scope, element, attrs) {
      console.log(attrs)
      scope.$watch(attrs.tdAutoFocus, function(value, value2) {
        console.log(value, value2);
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
