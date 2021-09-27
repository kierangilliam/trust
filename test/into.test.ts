import { Err, into, Option, Result } from '../src'
import { is, suite } from './utils'

const intoOption = suite('into Option')
const intoResult = suite('into Result')

intoOption('from Ok Result', () => {
	const res = Result.Ok('Yeet')
	const converted = into(Option, res).expect('implementation from Result into Option')
	
	is(converted.unwrap, 'Yeet')
})

intoOption('from Error Result', () => {
	const res = Err('Not so yeet')
	const converted = into(Option, res).expect('implementation from Result into Option')
	
	is(converted.isNone, true)
})	

intoResult('from None Option', () => {
	const none = Option.None
	const converted = into(Result, none).expect('implementation from Option into Result')
			
	is(converted.error.message, 'Conversion from Option resulted in None')
})	

intoResult('from Some Option', () => {
	const some = Option.Some('Hello')
	const converted = into(Result, some).expect('implementation from Option into Result')
	
	is(converted.unwrap, 'Hello')
})	

intoOption.run()
intoResult.run()