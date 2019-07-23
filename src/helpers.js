module.exports.pipe = (...fns) => value =>
	fns.reduce(
		(prev, fn) => fn(prev),
		value
	)

module.exports.pipeAsync = (...fns) => value =>
	fns.reduce(
		(prev, fn) => prev.then(fn),
		typeof value.then === 'function'
			? value
			: Promise.resolve(value)
	)

const curry = (fn, ...args) =>
	args.length >= fn.length
		? fn(...args)
		: (...more) => curry(fn, ...args, ...more)

module.exports.curry = curry
