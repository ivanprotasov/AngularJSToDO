angular
  .module('app', [])
  .controller('MainController', function MainController() {
    this.data = [
      {
        title: 'buy pizza',
        done: 'true'
      },
      {
        title: 'clean flat',
        done: 'false'
      },
      {
        title: 'do homework',
        done: 'false'
      }
    ]
  });
