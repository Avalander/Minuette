const test = require('tape')

const { sortItems } = require('sort')

test('sortItems moves done items to the bottom', t => {
	const result = sortItems([
		{ status: 'done' },
		{ status: 'todo' },
	])

	t.deepEqual(result, [
		{ status: 'todo' },
		{ status: 'done' },
	])

	t.end()
})

const items = [
	{ status: 'todo', text: 'Rainbow Dash thinks Fluttershy is a tree.', timestamp: 1000 },
	{ status: 'todo', text: 'I simply cannot let such a crime against fabulousity go uncorrected.', timestamp: 1100 },
	{ status: 'todo', text: `Huh? I'm pancake...I mean awake!`, timestamp: 1200 },
	{ status: 'todo', text: `Don't you use your fancy mathematics to muddy the issue!`, timestamp: 1300 },
	{ status: 'todo', text: `Reading's for eggheads like you, Twilight. Heh, no offense, but I am *not* reading. It's undeniably, unquestionably, uncool.`, timestamp: 1400 },
	{ status: 'done', text: 'Too old for free candy? Never!', timestamp: 1000 },
	{ status: 'done', text: 'Trixie is the highest level unicorn!', timestamp: 1100 },
	{ status: 'done', text: `I'd like to be a tree.`, timestamp: 1200 },
	{ status: 'done', text: 'Ha! Once again, the Great and Powerful Trixie has proven herself to be the most amazing unicorn in all of Equestria. Was there ever any doubt?', timestamp: 1300 },
	{ status: 'done', text: 'What the hay is that supposed to mean?', timestamp: 1400 },
]

const shuffle = ([ ...items ]) => {
	items.sort(() => Math.random() - 0.5)
	return items
}

for (let i = 0; i < 20; i++) {
	test('sortItems sorts random list', t => {
		const result = sortItems(shuffle(items))

		t.deepEqual(result, items)
		t.end()
	})
}
