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
fs.mkdirSync(path.resolve(os.homedir(), '.minuette'), { recursive: true })

module.exports.loadData = loadData({
	readFile,
	fileExists: fs.existsSync,
	store_path,
})

module.exports.saveData = saveData({
	writeFile,
	store_path,
})
