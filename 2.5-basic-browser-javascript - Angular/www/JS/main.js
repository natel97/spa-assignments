// $(() => {
//   let score = 0;
//   let mults = 0;
//   let autos = 0;
//
//   let multiplier = 1;
//
//   let autoCost = 100;
//   let multCost = 10;
//   let timeouts = [];


  //
  // let makeAuto = () => {
  //   setInterval(() => {
  //     score += multiplier
  //     redraw()
  //   }, 1000)
  //   timeouts.push(new Date().getMilliseconds())
  // }

  // let save = JSON.parse(window.localStorage.getItem("stored"));
  // if (save != null) {
  //   score = save.score;
  //   multiplier = save.multiplier;
  //   mults = save.multcount;
  //   while (autos < save.multipliers) {
  //     let time = new Date().getMilliseconds();
  //     if (save.timeouts.includes(time)) {
  //       makeAuto()
  //       autos++
  //       save.timeouts.splice(save.timeouts.indexOf(time), 1)
  //     }
  //   }
  // }


  let redraw = () => {
    $("#total").html("Total: " + score.toFixed(2))
    $("#add").html("+" + multiplier.toFixed(2))
    $("#multAmnt").html("Multipliers: " + mults)
    $("#autoAmnt").html("Autos: " + autos)
    if (score >= multCost)
      $("#multiplier").css("background-color", "white")
    else
      $("#multiplier").css("background-color", "darkred");
    if (score >= autoCost)
      $("#auto").css("background-color", "white")
    else
      $("#auto").css("background-color", "darkred");
  }

  redraw();


  $("#add").click(() => {
    score += multiplier;
    redraw()
  })

  // $("#auto").click(() => {
  //   if (score >= autoCost) {
  //     score -= autoCost;
  //     autos++;
  //     makeAuto()
  //     redraw()
  //   }
  // })
  //
  // $("#multiplier").click(() => {
  //   if (score >= multCost) {
  //     multiplier *= 1.2
  //     mults++;
  //     score -= multCost;
  //     redraw()
  //   }
  // })
  // 
  // $("#reset").click(() => {
  //   if (score === 0 && mults === 0 && autos === 0)
  //     return
  //   score = 0;
  //   mults = 0;
  //   autos = 0;
  //   multiplier = 1;
  //   savegame()
  //   location.reload();
  // })

  window.onbeforeunload = () => savegame()

})
