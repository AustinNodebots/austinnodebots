module.exports = {
	configFiles: {
		files: [
			'Gruntfile.js',
			'grunt/**/*.{js,yaml}'
		],
		options: {
			reload: true
		}
	},
	js: {
		files: [
			'Gruntfile.js',
			'grunt/**/*.js',
			'src/**/*.js'
		],
		tasks: [
			'jshint'
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
			'sass:dev'
		],
		options: {
			atBegin: true
		}
	},
	css: {
		files: [
			'src/css/**/*.css'
		],
		options: {
			livereload: true
		}
	}
};
