const { printList } = require('logger')
const { sortItems } = require('sort')
const { pipe } = require('helpers')

const print = pipe(
	sortItems,
	printList,
)

const data = [
	{ status: 'done', text: 'Watch ponies.', timestamp: 120 },
	{ status: 'todo', text: 'Watch even more ponies.', timestamp: 140 },
	{ status: 'todo', text: 'Watch more ponies.', timestamp: 130 },
]

const commands = require('commands')


const main = ([ command, ...args ]) => {
	const items = commands[command](args, data)
	print(items)
}

main(process.argv.slice(2))
