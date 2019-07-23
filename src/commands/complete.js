const { sortItems } = require('sort')

module.exports = ([ index ], items) => {
	const item = sortItems(items)[index]
	item.status = 'done'
	return items
}
