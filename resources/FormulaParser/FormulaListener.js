// Generated from Formula.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FormulaParser.
function FormulaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FormulaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FormulaListener.prototype.constructor = FormulaListener;

// Enter a parse tree produced by FormulaParser#lines.
FormulaListener.prototype.enterLines = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#lines.
FormulaListener.prototype.exitLines = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#expression.
FormulaListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#expression.
FormulaListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#returnExp.
FormulaListener.prototype.enterReturnExp = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#returnExp.
FormulaListener.prototype.exitReturnExp = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#innerBlock.
FormulaListener.prototype.enterInnerBlock = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#innerBlock.
FormulaListener.prototype.exitInnerBlock = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#ifThenElse.
FormulaListener.prototype.enterIfThenElse = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#ifThenElse.
FormulaListener.prototype.exitIfThenElse = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#functionDef.
FormulaListener.prototype.enterFunctionDef = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#functionDef.
FormulaListener.prototype.exitFunctionDef = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#anonFunctionDef.
FormulaListener.prototype.enterAnonFunctionDef = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#anonFunctionDef.
FormulaListener.prototype.exitAnonFunctionDef = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#assignment.
FormulaListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#assignment.
FormulaListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#assigned.
FormulaListener.prototype.enterAssigned = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#assigned.
FormulaListener.prototype.exitAssigned = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#logicalExpression.
FormulaListener.prototype.enterLogicalExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#logicalExpression.
FormulaListener.prototype.exitLogicalExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#booleanXORExpression.
FormulaListener.prototype.enterBooleanXORExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#booleanXORExpression.
FormulaListener.prototype.exitBooleanXORExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#booleanAndExpression.
FormulaListener.prototype.enterBooleanAndExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#booleanAndExpression.
FormulaListener.prototype.exitBooleanAndExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#equalityExpression.
FormulaListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#equalityExpression.
FormulaListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#relationalExpression.
FormulaListener.prototype.enterRelationalExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#relationalExpression.
FormulaListener.prototype.exitRelationalExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#additiveExpression.
FormulaListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#additiveExpression.
FormulaListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#multiplicativeExpression.
FormulaListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#multiplicativeExpression.
FormulaListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#arrayExpression.
FormulaListener.prototype.enterArrayExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#arrayExpression.
FormulaListener.prototype.exitArrayExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#negationExpression.
FormulaListener.prototype.enterNegationExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#negationExpression.
FormulaListener.prototype.exitNegationExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#powerExpression.
FormulaListener.prototype.enterPowerExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#powerExpression.
FormulaListener.prototype.exitPowerExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unaryOrNegate.
FormulaListener.prototype.enterUnaryOrNegate = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unaryOrNegate.
FormulaListener.prototype.exitUnaryOrNegate = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unaryExpression.
FormulaListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unaryExpression.
FormulaListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#innerPrimaryExpression.
FormulaListener.prototype.enterInnerPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#innerPrimaryExpression.
FormulaListener.prototype.exitInnerPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#selectionExpression.
FormulaListener.prototype.enterSelectionExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#selectionExpression.
FormulaListener.prototype.exitSelectionExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#funCall.
FormulaListener.prototype.enterFunCall = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#funCall.
FormulaListener.prototype.exitFunCall = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#primaryExpression.
FormulaListener.prototype.enterPrimaryExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#primaryExpression.
FormulaListener.prototype.exitPrimaryExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#value.
FormulaListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#value.
FormulaListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#newObject.
FormulaListener.prototype.enterNewObject = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#newObject.
FormulaListener.prototype.exitNewObject = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#defaultValue.
FormulaListener.prototype.enterDefaultValue = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#defaultValue.
FormulaListener.prototype.exitDefaultValue = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#array.
FormulaListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#array.
FormulaListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#selector.
FormulaListener.prototype.enterSelector = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#selector.
FormulaListener.prototype.exitSelector = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#minarray.
FormulaListener.prototype.enterMinarray = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#minarray.
FormulaListener.prototype.exitMinarray = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#dotselector.
FormulaListener.prototype.enterDotselector = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#dotselector.
FormulaListener.prototype.exitDotselector = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#arrayName.
FormulaListener.prototype.enterArrayName = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#arrayName.
FormulaListener.prototype.exitArrayName = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#label.
FormulaListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#label.
FormulaListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#number.
FormulaListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#number.
FormulaListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#negnumber.
FormulaListener.prototype.enterNegnumber = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#negnumber.
FormulaListener.prototype.exitNegnumber = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#bool.
FormulaListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#bool.
FormulaListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#material.
FormulaListener.prototype.enterMaterial = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#material.
FormulaListener.prototype.exitMaterial = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unitMultiplicativeExpression.
FormulaListener.prototype.enterUnitMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unitMultiplicativeExpression.
FormulaListener.prototype.exitUnitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unitInnerMultiplicativeExpression.
FormulaListener.prototype.enterUnitInnerMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unitInnerMultiplicativeExpression.
FormulaListener.prototype.exitUnitInnerMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unitClump.
FormulaListener.prototype.enterUnitClump = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unitClump.
FormulaListener.prototype.exitUnitClump = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unitPowerExpression.
FormulaListener.prototype.enterUnitPowerExpression = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unitPowerExpression.
FormulaListener.prototype.exitUnitPowerExpression = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#unit.
FormulaListener.prototype.enterUnit = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#unit.
FormulaListener.prototype.exitUnit = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#primitive.
FormulaListener.prototype.enterPrimitive = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#primitive.
FormulaListener.prototype.exitPrimitive = function(ctx) {
};


// Enter a parse tree produced by FormulaParser#string.
FormulaListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by FormulaParser#string.
FormulaListener.prototype.exitString = function(ctx) {
};



exports.FormulaListener = FormulaListener;