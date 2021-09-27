import { fmt, implFmt, struct } from '../src'
import { format } from '../src/core/fmt'
import { is, test } from './utils'

const rmWhitespace = (s: string) => 
	s.replace(/\s/g, '')

test('format plain object', () => {
	is(rmWhitespace(format('{}', { a: 'b' })), `{a:b}`)
})

test('make JS\'s Date format as YYYY-MM', () => {
	struct('DateTime')(Date)
	implFmt((t: Date) => `${t.getFullYear()}-${t.getMonth()}`)(Date)

	const date = new Date(2021, 11, 1)

	is(fmt(date).unwrap, '2021-11')
})

test.run()