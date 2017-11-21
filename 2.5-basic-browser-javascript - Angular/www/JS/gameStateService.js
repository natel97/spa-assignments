angular.module('app').service('gameStateService', [function() {

  this.score = 1000;
  this.mults = 0;
  this.autos = 0;
  this.multiplier = 1;
  this.autocost = 100;
  this.multcost = 10;
  this.timeouts = []

  this.addAuto = () => {
    if (this.score < this.autocost)
      return false;
    this.score -= this.autocost;
    this.autos++;
    this.timeouts.push(new Date().getMilliseconds())
    return true;
  }

  this.loadgame = () => {
    this.save = JSON.parse(localStorage.getItem("stored"));
    console.log("Loading... ->  " + this.save)
    if (this.save != null) {
      this.score = this.save.score;
      this.multiplier = this.save.multiplier;
      this.mults = this.save.multcount;
    }
  }

  this.addMultiplier = () => {
    if (this.score < this.multcost)
      return
    this.multiplier *= 1.2
    this.mults++;
    this.score -= this.multcost;
  }

  this.reset = () => {
    console.log("Inside reset")
    if (this.score === 0 && this.mults === 0 && this.autos === 0)
      return
    this.score = 0;
    this.mults = 0;
    this.autos = 0;
    this.multiplier = 1;
    this.timeouts = []
  }

  this.removeItem = (item) => this.save.timeouts.splice(this.save.timeouts.indexOf(item), 1)
  this.add = () => {
    this.score += this.multiplier;
    this.savegame()
  }

  this.increase = (side) => {
    if (side === left)
      this.addMultiplier()
    else {
      this.addAuto()
    }
  }

}])
