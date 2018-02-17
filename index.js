#!/usr/bin/env node
'use strict'
const program = require('commander')
const puppeteer = require('puppeteer')
const { URL } = require('url')

let urlString = process.argv[2]

async function screenshot(urlString) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  if (!urlString.match(/^https?\:\/\//)) {
    urlString = `https://${urlString}`
  }
  const url = new URL(urlString)
  const fileName = `${url.host}.png`
  await page.goto(urlString)
  await page.screenshot({ path: fileName })
  await console.log(`${fileName} saved`)
  await browser.close()
}

program
  .version('0.0.1')
  .command('screenshot <url>')
  .action((urlString, cmd) => {
    screenshot(urlString)
  })

program.parse(process.argv)
