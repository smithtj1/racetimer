"use strict";

racetimer.KeypadView = Backbone.View.extend({

	initialize: function(){
		this.template = Handlebars.template.keypad;
		_.bindAll(this, 'record');
	},

	events : {
		'click .btn-keypad' : 'numberPressed',
		'click .btn-keypad-function' : 'functionPressed',

	},

	render: function(){

        this.$el.html(this.template);

		return this;
	},

	numberPressed: function(event){
		var num = event.target.id.split('-')[1]
		//console.log(num);
		$('.current-input-display').append(num);
	},

	functionPressed: function(event){
		var functionName = event.target.id.split('-')[1]
		var call = this[functionName];
		
		if(typeof call === 'function'){
			call();	
		}
		else{
			console.warn(functionName + ' is not a function');
		}
		
	},

	backspace: function(){
		var currentText = $('.current-input-display').text();
		if(currentText && currentText.length > 0){
			$('.current-input-display').text(
				currentText.substring(0, currentText.length-1));
		}
	},

	clear: function(){
		$('.current-input-display').text('');	
	},

	record: function(){
		var runnerNumber = $('.current-input-display').text();
		var runnerTime = racetimer.clock.get('timeInMillis');
		//console.log(currentText + " finshed at " + racetimer.clock.printElapsed());

		var runner = new racetimer.Runner({place: ++racetimer.raceState.finisher, number: runnerNumber, time: runnerTime});
		racetimer.race.add(runner);

		this.clear();
	}

});