const fs = require('fs')
const chalk = require('chalk')

exports.createJS = createJS

function createJS() {
  // get HTML5 template file
  var file = fs.readFileSync(`${__dirname}/../templates/app.js`)
  fs.writeFileSync(`${process.cwd()}/app.js`, file)
  console.log(chalk.greenBright('+ Created `app.js` file'))
}

createJS()
