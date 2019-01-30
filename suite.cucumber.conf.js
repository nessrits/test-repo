exports.config = {

	specs : [ './features/*.feature', ],
	exclude : [

	],
	maxInstances : 10,

	capabilities : [

	{
		browserName : 'chrome',
		maxInstances : '1',
	},

	],

	sync : true,
	logLevel : 'silent', // Level of logging verbosity: silent | verbose | command | data | result | error
	coloredLogs : true, // Enables colors for log output.

	baseUrl : 'http://localhost:8080',
	waitforTimeout : 90000, // Default timeout for all waitFor* commands.
	connectionRetryTimeout : 90000, // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
	connectionRetryCount : 3, // Default request retries count

	services : [ 'selenium-standalone' ],
	framework : 'cucumber',
	reporters : [ 'junit' ],

	reporterOptions : {
		junit : {
			outputDir : './reports/junit-results/'
		},

	},

	cucumberOpts : {
		compiler : [ 'js:@babel/register' ],
		require : [ './features/stepDefinitions/checkWeatherInCitySteps.js' ],
	},
	before : function() {
		const chai = require('chai');
		global.expect = chai.expect;
		global.assert = chai.assert;
		global.should = chai.should();
	},

};
