module.exports.pipe = (...fns) => value =>
	fns.reduce(
		(prev, fn) => fn(prev),
		value
	)

const exists = x => x != null
const isFunction = x => typeof x === 'function'

module.exports.pipeAsync = (...fns) => value =>
	fns.reduce(
		(prev, fn) => prev.then(fn),
		exists(value) && isFunction(value.then)
			? value
			: Promise.resolve(value)
	)

const curry = (fn, ...args) =>
	args.length >= fn.length
		? fn(...args)
		: (...more) => curry(fn, ...args, ...more)

module.exports.curry = curry
