const test = require('tape')

const {
	loadData,
	saveData,
} = require('store/index.factory')

const store_path = '/ponies'


test('#loadData reads the file if the store path exists', t => {
	t.plan(2)

	const func = loadData({
		fileExists: path => {
			t.equal(path, store_path)
			return true
		},
		readFile: () => {
			t.pass('Calls readFile')
			return Promise.resolve('[]')
		},
		store_path,
	})

	func()
})

test('#loadData parses file contents', t => {
	const func = loadData({
		fileExists: () => true,
		readFile: () => Promise.resolve('[{"status": "done"}]'),
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
		fileExists: () => false,
		readFile: () => {
			t.fail('Should not call readFile')
		},
		store_path,
	})

	func()
		.then(() => {
			t.end()
		})
})

test('#loadData returns empty array if the store file does not exist', t => {
	const func = loadData({
		fileExists: () => false,
		readFile: () => {},
		store_path,
	})

	func()
		.then(result => {
			t.deepEqual(result, [])
			t.end()
		})
})
