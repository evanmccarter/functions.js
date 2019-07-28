// Many functions sourced from https://en.wikipedia.org/wiki/Lambda_calculus as of 2019-07-28

require('./logic.js')


// Create a pair
PAIR = x => y => f => f (x) (y)

// Get an element of a pair
FIRST = p => p (TRUE)
SECOND = p => p (FALSE)

// Can be fed to FIRST and SECOND but isn't a pair
NIL = x => (TRUE) 

// Tests for NIL
NULL = p => p (x => y => FALSE)


// Module exports

module.exports = {
	PAIR: PAIR,
	FIRST: FIRST,
	SECOND: SECOND,
	NIL: NIL,
	NULL: NULL,
}
