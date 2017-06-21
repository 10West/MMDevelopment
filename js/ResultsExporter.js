"use strict";


function exportResultsCSV() {

	// Run simulation on model
	var res;
	runModel({
		silent: true,
		rate: -1,
		onSuccess: function(result){
			// console.log('runModel Success');
			res = processSimulationResults(result);
		},
		onError: function(result){
			// console.log('runModel Error');console.log(result);
			res = {'simulationError': result};
		}
	});
	return res;

	function processSimulationResults(result) {
		// Initialize data columns array with time series
		var columns = [{
			header: getText("Time"),
			sortable: true,
			flex: 1,
			renderer: function(x) {
				return round(x, 9);
			}
		}];

		function addColumns(primitive) {
			columns.push({
				header: primitive.getAttribute('name'),
				sortable: true,
				flex: 1,
				dataIndex: primitive['id'],
				renderer: dataRenderer
			});
		}

		// Add all other relevant primitives to columns array
		findType('Stock').forEach(function(item) { addColumns(item) });
		findType('Variable').forEach(function(item) { addColumns(item) });
		findType('Converter').forEach(function(item) { addColumns(item) });
		// findType('State').forEach(function(item) { addColumns(item) }); // Don't use! - Not properly returning a result.value() function!!!!!

		// Start CSV string
		var output = "";

		// Add CSV headings
		output += columns.filter(function(x){
			return !x.hidden;
		}).map(function(x){
			return "'" + String(x.header).replace(/"/g, "''") + "'";
		}).join(",");

		// Add simulation output rows to CSV string
		for(var i = 0; i < result.times.length; i++){
			var cells = [];

			// Add time value at current counter iteration
			cells.push("'"+result.times[i]+"'");

			// Filter hidden columns then get matching results data and push to cells array
			columns.filter(function(x){
				return !x.hidden;
			}).forEach(function(col) {
				var id = col.dataIndex;
				if(id) {
					var primitive = findID(id);
					var value = ""+result.value(primitive)[i];
					cells.push("'"+value.replace(/"/g, "''")+"'");
				}
			});

			// Join row of cells output string
			output += ";" + cells.join(",");
		}

		return output;
	}
}