const fs = require('fs');

const {execSync} = require('child_process');

const babel_path = require.resolve("babel-cli/bin/babel.js");
const babili_path = require.resolve("babel-preset-babili");
const base_command = `${babel_path} --presets='${babili_path}' --no-babelrc `;

const minified_js = execSync(base_command + 'kittens_game_cheats.js').toString().trim();

const readme_text = `
# Kittens Game Cheats

## What does this do and why?

If you're addicted to the [Kittens Game](http://www.bloodrizer.ru/games/kittens/) here's your therapy.

This will unlock everything (all research, buildings, and resources)
and give you a trillion of each resource.

## Usage

Start a fresh game (may corrupt your existing game data, so use a different browser/machine if you care about it).

Press save (it's on the top-right corner).

Open the javascript console (on chrome, you can open it with \`Control-Shift-J\` or \`Command-Shift-J\`, or by going to menu -> more tools -> developer tools)

Copy-paste the code below and press enter (you can see the source code [here](https://github.com/gkovacs/kittens_game_cheats/blob/master/kittens_game_cheats.js))

\`\`\`javascript
${minified_js}
\`\`\`

The page will refresh, and you should have your one-trillion resources. Have fun!

## Credits

By Geza Kovacs https://github.com/gkovacs
`

fs.writeFileSync('readme.md', readme_text, {encoding: 'utf-8'});
