
# Kittens Game Cheats

## What does this do and why?

If you're addicted to the [Kittens Game](http://www.bloodrizer.ru/games/kittens/) here's your therapy.

This will unlock everything (all research, buildings, and resources)
and give you a trillion of each resource.

## Usage

Start off with a fresh game (may corrupt your existing one, so use a different browser profile if you care about your data).

Press save (it's on the top-right corner)

Open the javascript console (on chrome, you can open it with `Control-Shift-J` or `Command-Shift-J`, or by going to tools -> developer tools)

Copy-paste the code below (you can see the source code [here](https://github.com/gkovacs/kittens_game_cheats/blob/master/kittens_game_cheats.js)) and then press enter.

```javascript
function unlock_all_achievements(){var a=JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);for(var b of a.achievements)b.starUnlocked=!0,b.unlocked=!0;localStorage['com.nuclearunicorn.kittengame.savedata']=JSON.stringify(a)}function unlock_all_buildings(){var a=JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);for(var b of a.buildings)b.unlocked=!0;localStorage['com.nuclearunicorn.kittengame.savedata']=JSON.stringify(a)}function research_everything(){var a=JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);for(var b of a.science.techs)b.unlocked=!0,b.researched=!0;localStorage['com.nuclearunicorn.kittengame.savedata']=JSON.stringify(a)}function trillion_of_everything(){var a=JSON.parse(localStorage['com.nuclearunicorn.kittengame.savedata']);for(var b of a.resources)b.unlocked=!0,b.value+=1e12;localStorage['com.nuclearunicorn.kittengame.savedata']=JSON.stringify(a)}unlock_all_achievements(),unlock_all_buildings(),research_everything(),trillion_of_everything(),window.location.reload();
```

The page will refresh, and you should have your one-trillion resources. Have fun!

## Credits

By Geza Kovacs https://github.com/gkovacs
