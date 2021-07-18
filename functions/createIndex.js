const fs = require('fs')
const chalk = require('chalk')

exports.createIndex = createIndex

function createIndex() {
  // get HTML5 template file
  var file = fs.readFileSync(`${__dirname}/../templates/index.html`)
  fs.writeFileSync(`${process.cwd()}/index.html`, file)
  console.log(chalk.greenBright('+ Created `index.html` file'))
}

createIndex()
