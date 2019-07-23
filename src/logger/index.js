const { printList } = require('./index.factory')


module.exports.printList = printList({
	log: console.log,
})
