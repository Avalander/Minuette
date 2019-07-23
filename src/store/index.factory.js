const { pipeAsync } = require('../helpers')


module.exports.loadData = ({ readFile, fileExists, store_path }) => pipeAsync(
	() => fileExists(store_path)
		? readFile(store_path, { encoding: 'utf8' })
		: '[]',
	JSON.parse,
)

module.exports.saveData = ({ writeFile, store_path }) => pipeAsync(
	JSON.stringify,
	data => writeFile(store_path, data, { encoding: 'utf8' })
)
