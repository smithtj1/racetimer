"use strict";

racetimer.ResultsView = Backbone.View.extend({
	
	initialize: function(options){
		
		this.template = Handlebars.template.results;
		this.collection.on('change', this.render, this);
	},

	events : {
		'blur .finisher-number' : 'saveNumber',
		'click .export-btn' : 'exportResults'
	},

	render: function(){

		this.$el.html(this.template({runner: this.collection.toJSON()}));

		return this;
	},

	saveNumber : function(event){
		var number = event.target.value;
		//TODO: test for valid number

		var myPlace = event.target.id.split('-')[3];
		
		var runner = racetimer.race.find(function(runner){
			return runner.get('place') == myPlace;
		});

		if(runner){
			runner.set('number', number);
		}
	},

	exportResults: function(event){
		
		var blob = new Blob([exportTableToCSV($('#results-table'))], {type: "data:application/csv;charset=utf-8"});
		saveAs(blob, "results.csv");


		//event.target.download= "results.csv";
		//event.target.target="_blank";
		//this results in a very long href... may need to do it another way...
		//check out: https://github.com/eligrey/FileSaver.js/
		//event.target.href= exportTableToCSVLink($('#results-table'));
	
	}

});