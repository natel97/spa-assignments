$(() => {
  let score = 0;
  let multiplier = 1;
  let mults = 0;
  let autos = 0;
  let autoCost = 100;
  let multCost = 10;
  let timeouts = [];

  let savegame = () => window.localStorage.setItem("stored", JSON.stringify({
    "score": score,
    "multiplier": multiplier,
    "multipliers": autos,
    "multcount": mults
  }));

  let makeAuto = () => timeouts.push(setInterval(() => {
    score += multiplier
    redraw()
  }, 1000))

  let save = JSON.parse(window.localStorage.getItem("stored"));
  if (save != null) {
    console.log(Object.keys(save));
    score = save.score;
    multiplier = save.multiplier;
    mults = save.multcount;
    for (let x = 0; x < save.multipliers; x++) {
      makeAuto()
    }
  }


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

  $("#add").css("opacity", "1")

  $("#add").click(() => {
    score += multiplier;
    redraw()
  })

  $("#auto").click(() => {
    if (score >= autoCost) {
      score -= autoCost;
      autos++;
      makeAuto()
      redraw()
    }
  })

  $("#multiplier").click(() => {
    if (score >= multCost) {
      multiplier *= 1.2
      mults++;
      score -= multCost;
      redraw()
    }
  })

  $("#reset").click(() => {
    if (score === 0 && mults === 0 && autos === 0)
      return
    score = 0;
    mults = 0;
    autos = 0;
    multiplier = 1;
    savegame()
    location.reload();
  })

  window.onbeforeunload = () => savegame()

})
