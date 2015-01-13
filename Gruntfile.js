module.exports = function(grunt) {

  //load tasks
  grunt.loadNpmTasks('grunt-mocha-test');

  //configure tasks
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['test']);
};