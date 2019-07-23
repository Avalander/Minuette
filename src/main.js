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

const updateItems = items => {
	print(items)
	return saveData(items)
}

const commands = require('./commands')


const main = ([ command, ...args ]) => 
	loadData()
		.then(items => commands(command) (args, items))
		.then(items => items
			? updateItems(items)
			: () => {}
		)

module.exports = main
