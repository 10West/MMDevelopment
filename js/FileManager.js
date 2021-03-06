var InsightMakerFileExtension = ".ModelMaker";

// Append file extension to file (if not already there)
function appendFileExtension(filename,extension) {
	var extension_position=filename.length-extension.length;
	var current_extension=filename.slice(extension_position);
	if(current_extension.toLowerCase()!=extension.toLowerCase()) {
		filename+=extension;
	}
	return filename;
}

// Set the title to include the model name
function setTitle(filename) {
	var title;
	if(filename) {
		title = filename+" | Model Maker";

	} else {
		title = "Model Maker";
	}
	window.parent.document.title = title;
}

// Get xml data for the current model
function getModelXML2(baseNodeName, simulate) {
	if (baseNodeName == null) baseNodeName = 'ModelMakerModel';

	var enc = new mxCodec();
	var graph_dom=enc.encode(graph.getModel());
	var graph_dom_xml=graph_dom.innerHTML;

	if (simulate) {
		var resultsData = exportResultsCSV();
		if (resultsData.simulationError) return resultsData;

		var resultsSet = '<resultsset results-csv-data="'+resultsData+'"/>';

		var rootIdx = graph_dom_xml.lastIndexOf("</root>");
		if (rootIdx > -1) {
	  		var graph_dom_xml = graph_dom_xml.substr(0, rootIdx) + resultsSet + graph_dom_xml.substr(rootIdx);
	  	}
	}

	var xml_data="<"+baseNodeName+">"+graph_dom_xml+"</"+baseNodeName+">";
	return xml_data;
}

// Makes a new model
function newModel() {
	clearModel();
}

// High-level File manager. Does save and load of models
var FileManagerWeb = new function() {
	var self = this;
	var filename = null;

	this.set_filename = function(filename) {
		self.filename=filename;
		setTitle(filename);
	}

	this.fileSaveSimError = function(errorObject) {
		var errorTitle = 'A simulation error occurred';
		if(errorObject.errorPrimitive) errorTitle = 'Primitive ['+errorObject.errorPrimitive.value.attributes["0"].nodeValue+'] is invalid';
		Ext.MessageBox.alert(errorTitle,errorObject.error);
	}

	this.initiateDownload = function(model_name,xml_data) {
		model_name=appendFileExtension(model_name,InsightMakerFileExtension);
		self.set_filename(model_name);
		downloadFile(model_name,xml_data);
	}

	this.exportModel = function() {
		Ext.MessageBox.prompt('Model name', 'Enter name of model', function(btn, model_name){
			if(btn=='cancel') {
				return;
			}
			if (btn == 'ok'){
				var xml_data = getModelXML2('ModelMakerExport', true);
				if (xml_data.simulationError) {
					self.fileSaveSimError(xml_data.simulationError);
				} else {
					self.initiateDownload(model_name,xml_data);
				}
			}
		});
	};

	this.saveModel = function() {
		var model_name = self.filename;

		if(!model_name) {
			self.saveModelAs();
		} else {
			var xml_data = getModelXML2('ModelMakerSave');
			self.initiateDownload(model_name,xml_data);
		}
	};

	this.saveModelAs = function() {
		Ext.MessageBox.prompt('Model name', 'Enter name of model', function(btn, model_name){
			if(btn=='cancel') {
				return;
			}
			if (btn == 'ok'){
				var xml_data = getModelXML2('ModelMakerSave');
				self.initiateDownload(model_name,xml_data);
			}
		});
	};

	this.loadModel = function() {
		openFile({
			read: "text",
			multiple: false,
			accept: InsightMakerFileExtension,
			onCompleted: function(model) {
				importMXGraph(model.contents);
				self.set_filename(model.name);
			}
		});
	};

	this.newModel = function() {
		self.set_filename(null);
		newModel();
	}
};

// File upload button
var fileUploadForm = new Ext.form.Panel({
	cls: 'file-load-button-override',
    items: [{
        xtype: 'filefield',
        name: 'upload',
        allowBlank: false,
		buttonOnly: true,
		hideLabel: true,
		buttonConfig: {
			text: getText('Load'),
			tooltip: getText('Load model'),
			glyph: 0xf115,
			focusCls: 'x-menu-item-active'
		},
        listeners: {
        	'change': function(fileInput) {
        		openFile({
					read: "text",
					multiple: false,
					accept: InsightMakerFileExtension,
					onCompleted: function(model) {
						importMXGraph(model.contents);
						FileManagerWeb.set_filename(model.name);
					}
				}, $(fileInput.el.dom).find('input[type="file"]').get(0));
        	}
        }
    }]
});


// FileMenu for environment.WebOffline
var FileMenuWeb = {
text: getText('File'),
itemId: "filegroup",
glyph: 0xf15b,
menu: [
	{
		glyph: 0xf016,
		text: getText('New'),
		tooltip: getText('New model'),
		handler: FileManagerWeb.newModel,
		scope: this
	},
	// {
	// 	glyph: 0xf115, /*0xf115 alternative icon we could have used */
	// 	text: getText('Load'),
	// 	tooltip: getText('Load model'),
	// 	handler: FileManagerWeb.loadModel,
	// 	scope: this
	// },
	fileUploadForm,
	{
		glyph: 0xf0c7,
		text: getText('To Excel'),
		tooltip: getText('Export to Excel'),
		handler: FileManagerWeb.exportModel,
		scope: this
	},
	{
		glyph: 0xf0c7,
		text: getText('Save'),
		tooltip: getText('Save model to file'),
		handler: FileManagerWeb.saveModel,
		scope: this
	},
	{
		glyph: 0xf0c7,
		text: getText('Save As'),
		tooltip: getText('Save model to a new file'),
		handler: FileManagerWeb.saveModelAs,
		scope: this
	}
]
};

// Get the correct FileMenu depending on the environment
var FileMenu;
switch(viewConfig.environment) {
	case environment.InsightMakerOnline:
		FileMenu = [];
		break;
	case environment.WebOffline:
		FileMenu = [FileMenuWeb];
		break;
}
