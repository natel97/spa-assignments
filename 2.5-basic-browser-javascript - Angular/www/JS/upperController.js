angular.module('app').controller('upperController', ['gameStateService', function(game) {
  this.game = game;
}])
