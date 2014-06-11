module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        sass: {
            dist: {
                options: {
                    includePaths: ['sass'],
                    outputStyle: 'compressed',
                },
                files: {
                    'dist/css/main.css': 'src/sass/main.scss'
                }
            },
            dev: {
                options: {
                    includePaths: ['sass'],
                    sourceMap: true
                },
                files: {
                    'src/css/main.css': 'src/sass/main.scss'
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.html'],
                    dest: 'dist'
                }]
            }
        },

        watch: {
            configFiles: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    atBegin: true
                },
            },
            css: {
                files: ['src/css/**/*.css'],
                options: {
                    livereload: true
                }
            }
        },

        // 'gh-pages': {
        //     options: {
        //         base: 'dist'
        //     },
        //     src: ['**']
        // }

    });

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'sass', 'concat', 'uglify']);

};
