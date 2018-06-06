angular
  .module('app')
  .controller('OrderController', function () {
    this.customerOrder = {
      name:'',
      email:'',
      location: '',
      product: {
        label: '',
        id: ''
      },
      comments:''
    };
    this.submitOrder = function () {
      // BE
    }
  })
