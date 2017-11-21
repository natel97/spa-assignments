angular.module('app').controller('centerController', ['gameStateService', function(game) {
  this.game = game
  this.multiplier = game.multiplier;
}])
