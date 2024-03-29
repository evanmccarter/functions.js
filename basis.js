// Sourced from https://www.youtube.com/watch?v=3VQ382QG-y4&list=PLpkHU923F2XFWv-XfVuvWuxq41h21nOPK&index=1 from https://github.com/glebec/lambda-talk

// A basis that, when composed with each other, can generate all other functions

// Kestrel
K = a => b => a

// Starling
S = a => b => c => a (c) (b (c))


// Module exports

module.exports = {
	K: K,
	S: S,
}
