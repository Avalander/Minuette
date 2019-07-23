const chalk = require('chalk')

const checks = {
	todo: {
		mark: '[ ]',
		style: x => x,
		number: i => `${i}.`
	},
	done: {
		mark: chalk.bold.green('[*]'),
		style: chalk.italic.strikethrough.green,
		number: i => '  ',
	}
}

const mapItem = ({ text, status }, i) => [
	checks[status].number(i),
	checks[status].mark,
	checks[status].style(text),
].join(' ')


module.exports.printList = ({ log }) => items => log(
	items.map(mapItem).join('\n') + '\n'
)
