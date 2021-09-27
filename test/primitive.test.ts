import { Int } from '../src'
import { is, test } from './utils'

test('parses to Int', () => {
	const x = Int.parse(23) 
	is(x.unwrap.get, 23)

	const y = Int.parse(-23) 
	is(y.unwrap.get, -23)
})

test('parses to Error', () => {
	const x = Int.parse(23.2)
	is(x.error?.message, '23.2 is not a valid integer')

	// @ts-ignore
	const y = Int.parse(null)
	is(y.error?.message, 'null is not a valid integer')
})

test.run()