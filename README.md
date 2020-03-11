# Nearest public place

A technical testing project to get nearest public place with NodeJS.

- [Installation](#installation)
- [Configuration](#configuration)
  - [Basic usage](#basic-usage)
  - [Eslint](#eslint)
- [Testing](#testing)
- [What's included](#whats-included)

## Installation

```bash
# Clone the repo
$ git clone https://github.com/minhtuanchannhan/nearest-public-place

# Go into app's directory
$ cd nearest-public-place

# Install app's dependencies
$ npm install || yarn install
```

## Configuration

### Basic usage

Copy `.env.example` to `.env` and add Google Maps API Keys.

```bash
http://localhost:3000

# Run dev server
$ npm dev || yarn dev

# Run production server
$ npm start || yarn start
```

### Eslint

Pluggable linting utility for JavaScript

```bash
# Find the problems
$ npm lint || yarn lint

# Automatically fix problems
$ npm lint:fix || yarn lint:fix
```

## Testing

```bash
$ npm test || yarn test
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
my-cds
├── src/
│   ├── api/          #API
│   ├── config/       #config
│   ├── controllers/  #controllers
│   ├── middleware    #middleware
│   ├── tests         #tests
│   └── utils         #utils
└── package.json
```
