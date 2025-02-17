require('dotenv').config()

const requiredConfigs = [
  'BOT_TOKEN',
  'LOGS_CHANNEL',
  'DB_URL',
  'DEV_ID'
]
for (const config of requiredConfigs) {
  if (!process.env[config]) {
    throw new Error(`Missing ${config} in .env`)
  }
}

const installedRepositories = require('./repositories/installedRepositories.json')

const installedModules = require('./modules/installedModules.json')

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  SYSTEM_LOGS_CHANNEL: process.env.LOGS_CHANNEL,
  DB_URL: process.env.DB_URL,
  DEV_ID: process.env.DEV_ID,
  installedRepositories,
  installedModules
}
