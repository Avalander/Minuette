const { pipeAsync } = require('helpers')


module.exports.loadData = ({ readFile, store_path }) => pipeAsync(
	() => readFile(store_path, { encoding: 'utf8' }),
	JSON.parse,
)

module.exports.saveData = ({ writeFile, store_path }) => pipeAsync(
	JSON.stringify,
	data => writeFile(store_path, data, { encoding: 'utf8' })
)
