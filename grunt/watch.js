module.exports = {
	configFiles: {
		files: [
			'Gruntfile.js',
			'grunt/**/*.{js,yaml}'
		],
		reload: true
	},
	js: {
		files: [
			'Gruntfile.js',
			'grunt/**/*.js',
			'src/**/*.js'
		],
		tasks: [
			'newer:jshint'
		],
		options: {
			livereload: true
		}
	},
	sass: {
		files: [
			'src/sass/**/*.scss'
		],
		tasks: [
			'newer:sass:dev'
		],
		options: {
			livereload: true
 		}
	},
	html: {
		files: [
			'src/**/*.html'
		],
		options: {
			livereload: true
		}
	}
};
