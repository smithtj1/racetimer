"use strict";

var racetimer = {
	tv  : $("#timerView"),
	rv  : $("#resultsView"),
	
	initialize : function(){
		this.clock = new racetimer.Clock();
		this.race = new racetimer.Race();
		this.raceState= new racetimer.RaceState();
		
		this.Router = new racetimer.Router();

	}
	
};



racetimer.Router = Backbone.Router.extend({

	routes : {
		'' : 'showHome',
		'results(/)' : 'showResults'
	},

	showHome : function(){
        
        if(!racetimer.timerView) {
        	
        	racetimer.timerView = new racetimer.TimerView({model: racetimer.clock});
        	racetimer.tv.append(racetimer.timerView.render().el);

        	racetimer.keypadView = new racetimer.KeypadView();
			racetimer.tv.append(racetimer.keypadView.render().el);

        }
        racetimer.tv.show();
        racetimer.rv.hide();
	},

	showResults : function(){
		
		racetimer.tv.hide();
	
		//if(!racetimer.resultsView){	
			racetimer.resultsView = new racetimer.ResultsView({collection: racetimer.race});
		//}

		racetimer.rv.empty();
		racetimer.rv.append(racetimer.resultsView.render().el);
		racetimer.rv.show();
	},


});


$(document).on("ready", function(){

	//sets up the nav interactions
	$('ul.nav.nav-pills li a').click(function() {           
    	$(this).parent().addClass('active').siblings().removeClass('active');           
	});

	//initalize the app
	racetimer.initialize();

	//start the router
	Backbone.history.start();

	//add fastclick
	FastClick.attach(document.body);
});

