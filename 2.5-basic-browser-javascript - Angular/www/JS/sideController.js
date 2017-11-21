angular.module('app').controller('sideController', ['gameStateService', "$interval", "$scope", "$window", function(game, $interval, $scope, $window) {
  this.$onInit = () => {

    this.game = game

    this.savegame = () => window.localStorage.setItem("stored", JSON.stringify({
      "score": this.game.score,
      "multiplier": this.game.multiplier,
      "multipliers": this.game.autos,
      "multcount": this.game.mults,
      "timeouts": this.game.timeouts
    }));

    $window.onbeforeunload = () => this.savegame()

    if (this.side) {
      this.name = "Multiplier"
      this.increment = "*1.2"
    } else {
      this.name = "Auto Clicker"
      this.increment = 1;
      this.increase = () => {
        if (game.addAuto()) {
          $interval(() => {
            game.add()
          }, 1000)
        }
      }

      this.game.loadgame()
      this.game.savegame = () => this.savegame()

      if (this.game.save != null && !this.side) {
        console.log(this.game.save.multipliers)
        console.log(this.game.save.timeouts.length)
        console.log(this.game.save.timeouts)
        this.game.timeouts = this.game.save.timeouts;
        while (this.game.autos < this.game.save.multipliers) {
          this.time = new Date().getMilliseconds();
          if (this.game.save.timeouts.includes(this.time)) {
            this.increase()
            $interval(() => {
              game.add()
            }, 1000)
            this.game.autos++
              console.log(this.game.save.timeouts.indexOf(this.time))
            console.log(this.game.save.timeouts)
            this.game.removeItem(this.time)
          }
        }
      }
    }
  }
}])
