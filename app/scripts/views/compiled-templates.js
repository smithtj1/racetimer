this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["template"] = this["Handlebars"]["template"] || {};

this["Handlebars"]["template"]["keypad"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"keypad\">\n\n<div class=\"header\">\n	Runner:<span class=\"current-input-display\"/></div>\n</div>\n\n<div class=\"btn-group timer-btn\">\n	<div class=\"btn-group btn-group-justified timer-btn-row\">\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-1\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">1</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-2\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">2</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-3\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">3</button>\n  		</div>\n 	</div>\n\n 	<div class=\"btn-group btn-group-justified timer-btn-row\">\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-4\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">4</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-5\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">5</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-6\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">6</button>\n  		</div>\n 	</div>\n\n 	<div class=\"btn-group btn-group-justified timer-btn-row\">\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-7\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">7</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-8\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">8</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-9\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">9</button>\n  		</div>\n 	</div>\n\n	<div class=\"btn-group btn-group-justified timer-btn-row\">\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-backspace\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad-function\"> <-- </button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-0\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad\">0</button>\n  		</div>\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-clear\" type=\"button\" class=\"btn btn-default btn-lg btn-keypad-function\"> CL </button>\n  		</div>\n 	</div>\n\n	<div class=\"btn-group btn-group-justified timer-btn-row\">\n  		<div class=\"btn-group timer-btn\">\n    		<button id=\"keypad-record\" type=\"button\" class=\"btn btn-primary btn-lg btn-keypad-function\">record runner</button>\n  		</div>\n\n</div>\n\n\n</div>";
  });

this["Handlebars"]["template"]["results"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n		<tr \">\n		<td>";
  if (stack1 = helpers.place) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.place); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n		<td>";
  if (stack1 = helpers.number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.number); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.number), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>  \n		<td>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatTime || (depth0 && depth0.formatTime)),stack1 ? stack1.call(depth0, (depth0 && depth0.time), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.time), options)))
    + "</td>\n		</tr>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<input type=\"number\" class=\"finisher-number\" id=\"finisher-number-input-";
  if (stack1 = helpers.place) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.place); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>";
  return buffer;
  }

  buffer += "<h1 class=\"well\"><p class=\"text-center\">Results</p></h1>\n<span class=\"pull-right\"><a class=\"export-btn btn btn-default\">Export</a></span>\n<table class=\"table table-striped table-hover\" id=\"results-table\">\n<thead>\n<tr><th>Place</th><th>Bib Number</th><th>Time</th></tr>\n</thead>\n\n<tbody>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.runner), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tbody>\n\n</table>";
  return buffer;
  });

this["Handlebars"]["template"]["timer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n		<button type=\"button\" class=\"timerButton btn btn-default btn-danger\">\n		Stop\n		</button>\n	";
  }

function program3(depth0,data) {
  
  
  return "\n		<button type=\"button\" class=\"timerButton btn btn-default btn-success\">\n		Start\n		</button>\n	";
  }

  buffer += "<div class =\"timerButtonGrp btn-group\">\n	\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.started), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n\n<span class=\"pull-right\">\n";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.formatTime || (depth0 && depth0.formatTime)),stack1 ? stack1.call(depth0, (depth0 && depth0.timeInMillis), options) : helperMissing.call(depth0, "formatTime", (depth0 && depth0.timeInMillis), options)))
    + "\n</span>\n\n";
  return buffer;
  });