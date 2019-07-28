// Many functions sourced from https://en.wikipedia.org/wiki/Lambda_calculus as of 2019-07-28

// Church numeral Zero
Z = f => x => x

// Successor
SUCC = n => f => x => f (n (f) (x))

// Predecessor
PRED = n => f => x => n (g => h => h (g (f))) (u => x) (u => u)

// Operators
PLUS = m => n => f => x => m (f) (n (f) (x))
SUB = m => n => n (PRED) (m)
MULT = m => n => f => m (n (f))
POW = b => e => e (b)


// Utilities

// Used to translate church numerals to int by executing <numeral>(count)(<from>)
// EG MULT(SUCC(SUCC(Z)))(SUCC(SUCC(SUCC(Z))))(count)(0) == 6
count = n => n+1

// Translate a numeral to int
function translate(i) {
	// Just count from 0
	return i(count)(0);
}

// Generate the nth integer
function integer(n) {
	if (n <= 0) return Z;
	else return SUCC(integer(n-1));
}


// Module exports

module.exports = {
	Z: Z,
	SUCC: SUCC,
	PRED: PRED,
	PLUS: PLUS,
	SUB: SUB,
	MULT: MULT,
	POW: POW,
	count: count,
	translate: translate,
	integer: integer,
}
