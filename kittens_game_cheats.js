// If you're addicted to http://www.bloodrizer.ru/games/kittens/ here's your therapy.
// This will unlock everything (all achievements, buildings, and resource)
// and give you off a trillion of each resource.
//
// To use:
// Start off with a fresh game (may corrupt your existing one, so use a different browser profile).
// Press save (it's on the top-right corner)
// Then open the javascript console (on chrome, you can open it with Control-Shift-J or Command-Shift-J, or by going to tools -> developer tools)
// Then refresh the page. You should have your one-trillion resources. Have fun!
//
// By Geza Kovacs https://github.com/gkovacs

function unlock_all_achievements() {
  var data = JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);
  for (var x of data.achievements) {
    x.starUnlocked = true;
    x.unlocked = true;
  }
  localStorage['com.nuclearunicorn.kittengame.savedata'] = JSON.stringify(data);
}

function unlock_all_buildings() {
  var data = JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);
  for (var x of data.buildings) {
    x.unlocked = true;
  }
  localStorage['com.nuclearunicorn.kittengame.savedata'] = JSON.stringify(data);
}

function research_everything() {
  var data = JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);
  for (var x of data.science.techs) {
    x.unlocked = true;
    x.researched = true;
  }
  localStorage['com.nuclearunicorn.kittengame.savedata'] = JSON.stringify(data);
}

function trillion_of_everything() {
  var data = JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);
  for (var x of data.resources) {
    x.unlocked = true;
    x.value += 1000000000000;
  }
  localStorage['com.nuclearunicorn.kittengame.savedata'] = JSON.stringify(data);
}

unlock_all_achievements();
unlock_all_buildings();
research_everything();
trillion_of_everything();
