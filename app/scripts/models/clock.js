"use strict";

racetimer.Clock = Backbone.Model.extend({
	
	defaults : {
		'started' :  false,
	},

	initialize : function() {
		//this.set('date', Date());

		_.bindAll(this, 'timeInMillis');
	},

	start : function(){
		this.set('started', true);
		
		var now = new Date();
		now = now.getTime();
		this.set('startTime', now);
		
		this.interval = setInterval(this.timeInMillis, 1000);
	},

	//setDate : function() {
	//	this.set('date', Date());
	//},

	stop : function(){
		this.set('started', false);
		clearInterval(this.interval);
	},
	
	isStarted : function(){
		return this.get('started');
	},

	timeInMillis : function(){
		var now = new Date();
		now = now.getTime();
		this.set('timeInMillis', now - this.get('startTime'));
	},


});

