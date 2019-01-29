module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		webdriver : {
			test : {
				configFile : './suite.cucumber.conf.js'
			},
		},
	});

	grunt.loadNpmTasks('grunt-cucumberjs');
	grunt.loadNpmTasks('grunt-webdriver');
	grunt.registerTask('default', [ 'webdriver:test' ]);
};
