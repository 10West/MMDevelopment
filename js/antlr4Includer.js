// Load antlr4's "Honey" version of require()
require(['./antlr4/honey_require'], function() {
	// Redirect to Honey require function for antlr4 scope
	require = honeyRequire;
	var antlr4 = require('./antlr4/index');
	var FormulaLexer = require('./FormulaParser/FormulaLexer');
	var FormulaListener = require('./FormulaParser/FormulaListener');
	var FormulaParser = require('./FormulaParser/FormulaParser');

	window.antlr4 = antlr4;
	window.FormulaLexer = FormulaLexer;
	window.FormulaListener = FormulaListener;
	window.FormulaParser = FormulaParser;
});