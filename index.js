#!/usr/bin/env node
'use strict'
const program = require('commander')
const puppeteer = require('puppeteer')
const { URL } = require('url')
const pjson = require('./package.json')

let argvLength = process.argv.length
let urlStrings = process.argv.slice(3, argvLength)

const buildURL = (urlString) => {
  if (!urlString.match(/^https?\:\/\//)) {
    return `https://${urlString}`
  }
}

async function screenshot(urlStrings) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  for (let urlString of urlStrings) {
    urlString = buildURL(urlString)
    const url = new URL(urlString)
    const fileName = `${url.host}.png`
    await page.goto(urlString)
    await page.screenshot({ path: fileName, fullPage: true })
    await console.log(`${fileName} saved`)
  }
  await browser.close()
}

async function pdf(urlStrings) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  for (let urlString of urlStrings) {
    urlString = buildURL(urlString)
    const url = new URL(urlString)
    const fileName = `${url.host}.pdf`
    await page.goto(urlString)
    await page.pdf({ path: fileName, format: 'A4' })
    await console.log(`${fileName} saved`)
  }
  await browser.close()
}

async function consoleLog(urlStrings) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  for (let urlString of urlStrings) {
    urlString = buildURL(urlString)
    const url = new URL(urlString)
    const fileName = `${url.host}.pdf`

    page.on('console', msg => {
      console.log('PAGE LOG:', msg.text())
    })
    await page.goto(urlString)
  }
  await browser.close()
}

program
  .version(pjson.version)
  .command('screenshot [urls...]')
  .action((urlStrings, cmd) => {
    screenshot(urlStrings)
  })

program
  .command('pdf [urls...]')
  .action((urlStrings, cmd) => {
    pdf(urlStrings)
  })

program
  .command('console [urls...]')
  .action((urlStrings, cmd) => {
    consoleLog(urlStrings)
  })

program.parse(process.argv)
