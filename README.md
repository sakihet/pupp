# pupp

command line wrapper for puppeteer.

[![Build Status](https://travis-ci.org/sakihet/pupp.svg?branch=master)](https://travis-ci.org/sakihet/pupp)
[![NPM pupp package](https://img.shields.io/npm/v/pupp.svg)](https://npmjs.org/package/pupp)

## Features
- save screenshots
- create PDFs

## Installation

```
npm install -g pupp
```

## Usage

### Save screenshots

```
pupp screenshot google.com
pupp screenshot github.com www.npmjs.com
```

### Create PDFs

```
pupp pdf www.wikipedia.org
```

## Dependencies
- [puppeteer](https://github.com/GoogleChrome/puppeteer)
- [commander.js](https://github.com/tj/commander.js/)

## Contributing

Bug reports, featuer requests and pull requests are welcome on GitHub at https://github.com/sakihet/pupp.

## LICENSE
MIT
