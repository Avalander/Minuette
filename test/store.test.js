const test = require('tape')

const {
	loadData,
	saveData,
} = require('store/index.factory')

const store_path = '/ponies'

const makeFileExists = (value, check = () => {}) => (...args) => {
	check(...args)
	return value
}

const makeReadFile = (value, check = () => {}) => (...args) => {
	check(...args)
	return Promise.resolve(value)
}


test('#loadData reads the file if the store path exists', t => {
	t.plan(2)

	const func = loadData({
		fileExists: makeFileExists(
			true,
			x => t.equal(x, store_path)
		),
		readFile: makeReadFile(
			'[]',
			() => t.pass('Calls readFile')
		),
		store_path,
	})

	func()
})

test('#loadData parses file contents', t => {
	const func = loadData({
		fileExists: makeFileExists(true),
		readFile: makeReadFile('[{"status": "done"}]'),
		store_path,
	})

	func()
		.then(result => {
			t.deepEqual(result, [{ status: 'done' }])
			t.end()
		})
})

test('#loadData does not try to read the file if store path does not exist', t => {
	const func = loadData({
		fileExists: makeFileExists(false),
		readFile: makeReadFile(
			'[]',
			() => t.fail('Should not call readFile')
		),
		store_path,
	})

	func()
		.then(() => {
			t.end()
		})
})

test('#loadData returns empty array if the store file does not exist', t => {
	const func = loadData({
		fileExists: makeFileExists(false),
		readFile: makeReadFile(),
		store_path,
	})

	func()
		.then(result => {
			t.deepEqual(result, [])
			t.end()
		})
})
