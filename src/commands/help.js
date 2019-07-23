const help_text = `
Usage:
	minuette 'command' [...arguments]

Commands:
	add 'text': Creates a new task with the given text.
	complete 'index': Marks the task with the given index as done.
	help: Displays this message.
	list: Displays all tasks.
`

module.exports = (_, items) => {
	console.log(help_text)
	return false
}
