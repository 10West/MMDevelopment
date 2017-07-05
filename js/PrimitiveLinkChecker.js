"use strict";

function checkPrimitiveLinks(modelItems) {

	for (var i = 0; i < modelItems.length; i++) {
		// Check all of each Variables, Stocks and Flows inbound links and flows are used in their equations
		if (modelItems[i].value.nodeName == 'Variable'
			|| modelItems[i].value.nodeName == 'Stock'
			|| modelItems[i].value.nodeName == 'Flow'
		) {
			checkModelItem(modelItems[i]);
		}
	}


	function checkModelItem(item) {
		var edges = item.edges;

		// Check there are connections existing
		if (!edges) return;

		for (var j = 0; j < edges.length; j++) {
			checkmodelItemEdge(item, edges[j]);
		}
	}


	function checkmodelItemEdge(item, edge) {

		// Throw error where a Link has no target
		if (edge.value.nodeName == 'Link' && !edge.target) {
			throw {
				msg: getText("A link from the primitive %s is missing target.", "<i>" + clean(item.getAttribute('name')) + "</i>"),
				primitive: edge,
				showEditor: false
			};
		}

		// Exempt equation inclusion requirement where connection is a Flow from a Stock
		if (edge.value.nodeName == 'Flow' && item.value.nodeName == 'Stock') return;

		// Get the target object
		var target = findID(edge.target.id);

		// Ignore connections where current item is the target (validity will be checked from the other end)
		if (target.id == item.id) return;

		var targetEquation;
		if (target.value.nodeName == 'Stock') {
			// If target is a Stock then 'initiialvalue' should be substituted as the equation
			targetEquation = target.getAttribute('InitialValue');
		} else if (target.value.nodeName == 'Flow') {
			// If target is a Flow then 'flowrate' should be substituted as the equation
			targetEquation = target.getAttribute('FlowRate');
		} else if (target.value.nodeName == 'Variable') {
			// If target is a Variable then 'Equation' is used
			targetEquation = target.getAttribute('Equation');
		} else {
			// Target is not a type with equation or equivalent
			return;
		}

		// Ensure equation value is a string
		if ((typeof targetEquation == 'undefined') || targetEquation.length < 1) targetEquation = '';
		targetEquation = String(targetEquation);

		// Check target equation includes source object name
		if (targetEquation.indexOf('['+item.getAttribute('name')+']') < 0) {
			throw {
				msg: getText("The equation for the primitive %s is missing a reference to %s.", "<i>" + clean(target.getAttribute('name')) + "</i>", "<i>" + clean(item.getAttribute('name')) + "</i>"),
				primitive: target,
				showEditor: false
			};
		}
	}


}