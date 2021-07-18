#!/usr/bin/env node

const chalk = require('chalk')
const figlet = require('figlet')

exports.runGwint = runGwint

function runGwint() {
  console.log(
    chalk.red(
      figlet.textSync('Gwint', {
        font: 'Small Poison',
        horizontalLayout: 'default',
      }),
    ),
  )
  const createIndex = require('./functions/createIndex')
  const createStyle = require('./functions/createStyle')
  const createJS = require('./functions/createJS')
}

runGwint()
