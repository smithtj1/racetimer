"use strict";

racetimer.TimerView = Backbone.View.extend({

	className: "timer",

	events: {
		'click .timerButton' : 'buttonPressed'
	},

	initialize: function(options){
		
		this.template = Handlebars.template.timer;
		
		this.model.on('change', this.render, this);
	},

	render: function(){

		this.$el.html(this.template(this.model.toJSON()));

		//console.log('is the clock started: ' + this.model.isStarted());
		return this;
	},
	
	buttonPressed: function(){
		
		//expect the model to be of type clock
		if(this.model.isStarted()){
			this.model.stop();
		}
		else{
			this.model.start();
		}
	},

	

});

