/**
 * Created by Harry Kurniawan on 3/9/16.
 */
'use strict';

// Custom variable to do simple interval trick
var timing;
var oldTiming = 0;

// Render quote element use Quote data and default order number
// __quote = component function name
ReactDOM.render(React.createElement(
		__quote, 
		{ param: dataQuote, order: 1 }
	), 
	document.getElementById('app-quote'));

// Set interval
window.setInterval(function () {
	
	// Set random order number
	timing = Math.floor(Math.random() * (dataQuote.quote.length - 1 - 0 + 1)) + 0;
	
	// Check order number, if new one equal with last one then set another number
	if (timing == oldTiming) {
		if (timing <= 5) {
			timing = timing + 2;
		} else if (timing > 5) {
			timing = timing - 2;
		}
	}

	// Unmount quote element
	ReactDOM.unmountComponentAtNode(document.getElementById('app-quote'));


	// Render quote element use Quote data and random order number
	ReactDOM.render(React.createElement(
			__quote, 
			{ param: dataQuote, order: timing }
		), 
		document.getElementById('app-quote'));

	// Define the last one
	oldTiming = timing;

}.bind(undefined), 5000);


// Render skill element use Skill data
// __skills = component function name
ReactDOM.render(React.createElement(
		__skills, 
		{ param: dataSkills }
	), 
	document.getElementById('app-skills'));