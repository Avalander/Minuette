const { printList } = require('./logger')
const { sortItems } = require('./sort')
const { pipe } = require('./helpers')
const {
	loadData,
	saveData,
} = require('./store')

const print = pipe(
	sortItems,
	printList,
)

const commands = require('./commands')


const main = ([ command, ...args ]) => 
	loadData()
		.then(items => commands[command](args, items))
		.then(items => {
			print(items)
			return items
		})
		.then(saveData)

module.exports = main
