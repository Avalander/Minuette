const compareItems = (a, b) =>
	a.status === b.status
		? a.timestamp - b.timestamp
		: a.status === 'done'
		? 1
		: -1

module.exports.sortItems = ([ ...items ]) => {
	items.sort(compareItems)
	return items
}
