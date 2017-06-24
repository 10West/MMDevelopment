// Load antlr4's "Honey" version of require()
require(['honey_require'], function() {
	// Redirect to Honey require function for antlr4 scope
	require = honeyRequire;
	var antlr4 = require('antlr4/index');

	exports.antlr4 = antlr4;
});