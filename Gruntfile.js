module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var configs = require('load-grunt-config')(grunt);
    grunt.initConfig(configs);
};
