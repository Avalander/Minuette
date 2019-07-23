const add = require('./add')
const complete = require('./complete')
const help = require('./help')
const list = require('./list')

const commands = {
	add,
	complete,
	help,
	list,
}

module.exports = name => commands[name] || help
