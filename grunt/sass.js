module.exports ={
	dist: {
		options: {
			includePaths: [
				'sass/**/*'
			],
			outputStyle: 'compressed'
		},
		files: {
			'dist/css/main.css': 'src/sass/main.scss'
		}
	},
	dev: {
		options: {
			includePaths: [
				'sass/**/*'
			],
			sourceMap: true
		},
		files: {
			'src/css/main.css': 'src/sass/main.scss'
		}
	}
};
