// Many functions sourced from https://en.wikipedia.org/wiki/Lambda_calculus as of 2019-07-28

// True and False
TRUE = a => b => a
FALSE = a => b => b

// If
IFTHENELSE = p => a => b => p (a) (b)

// Operators
AND = p => q => p (q) (p)
OR = p => q => p (p) (q)
NOT = p => p (FALSE) (TRUE)


// Module exports

module.exports = {
	TRUE: TRUE,
	FALSE: FALSE,
	IFTHENELSE: IFTHENELSE,
	AND: AND,
	NOT: NOT,
}
