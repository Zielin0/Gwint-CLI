const fs = require('fs')
const chalk = require('chalk')

exports.createStyle = createStyle

function createStyle() {
  // get HTML5 template file
  var file = fs.readFileSync(`${__dirname}/../templates/style.css`)
  fs.writeFileSync(`${process.cwd()}/style.css`, file)
  console.log(chalk.greenBright('+ Created `style.css` file'))
}

createStyle()
