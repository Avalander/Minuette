module.exports = ([ text ], items) => items.concat([{
	text,
	status: 'todo',
	timestamp: Date.now(),
}])
