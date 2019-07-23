const { promisify } = require('util')
const fs = require('fs')
const os = require('os')
const path = require('path')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const {
	loadData,
	saveData,
} = require('./index.factory')

const store_path = path.resolve(os.homedir(), '.minuette', 'data.json')

module.exports.loadData = loadData({
	readFile,
	store_path,
})

module.exports.saveData = saveData({
	writeFile,
	store_path,
})
