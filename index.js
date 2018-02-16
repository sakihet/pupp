#!/usr/bin/env node
'use strict'
const program = require('commander')
const puppeteer = require('puppeteer')

let url = process.argv[2]

async function screenshot(url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.screenshot({ path: `screenshot.png` })
  await browser.close()
}

program
  .version('0.0.1')
  .command('screenshot <url>')
  .action((url, cmd) => {
    screenshot(url)
  })

program.parse(process.argv)
