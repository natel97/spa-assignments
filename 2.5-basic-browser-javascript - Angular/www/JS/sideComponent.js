angular.module('app').component('side', {
  templateUrl: 'www/HTML/sidebar.html',
  controller: 'sideController',
  bindings: {
    side: '<'
  }
})
