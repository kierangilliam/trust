import * as assert from 'uvu/assert'
import { format } from '../src'
export { suite, test } from 'uvu'

const removeTabsNewLines = (str: string): string => {
	return str.split('\t').join('').split('\n').join('')
}

export const is = <T>(actual: T, expected: T, message?: string): void => {
	try {
		assert.is(actual, expected, message)
	} catch(e) {
		if (e instanceof assert.Assertion) {
			throw new assert.Assertion({
				...e,
				details: e.details ? e.details : '',
				actual: removeTabsNewLines(format('{}', actual)),
				expects: removeTabsNewLines(format('{}', expected)),
			})
		}

		throw e
	}
}