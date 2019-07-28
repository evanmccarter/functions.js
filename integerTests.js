// Many functions sourced from https://en.wikipedia.org/wiki/Lambda_calculus as of 2019-07-28

// Tests integers logically
require('./integers.js')
require('./logic.js')


// Tests
ISZERO = n => n (x => FALSE) (TRUE)
LEQ = m => n => ISZERO (SUB (m) (n))


// Module exports

module.exports = {
	ISZERO: ISZERO,
	LEQ: LEQ
}
