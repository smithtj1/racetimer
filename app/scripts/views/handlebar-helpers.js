(function() {
    "use strict";

    Handlebars.registerHelper('formatTime', function(millis) {
        
        if(millis){
        	
        	//millis = millis + 54000

        	var time = new Array();

        	//igonoring hours for now
        	//var time[0] = Math.floor(millis/3600000);
        	
        	time[1] = Math.floor(millis/60000);

        	time[2] = Math.floor((millis - time[1]*60000)/1000);
        	
        	_.each(time, function(time, index, list){
        		if(time.toString().length < 2){
        			 list[index] = "0" + time.toString();
        		}	
        	});
        	

        	return time[1] + ":" + time[2];
        }
        else{
            return "00:00";
        }
        
    });
})();