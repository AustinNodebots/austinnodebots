module.exports = {
	dist: {
		options: {
			sassDir: 'src/sass',
			cssDir: 'dist/css',
			httpPath: 'dist',
			imagesDir: 'src/sprites',
			generatedImagesDir: 'dist/img/sprites',
			environment: 'production',
			outputStyle: 'compressed'
		}
	},
	dev: {
		options: {
			sassDir: 'src/sass',
			cssDir: 'src/css',
			httpPath: 'src',
			imagesDir: 'src/sprites',
			generatedImagesDir: 'src/img/sprites'
		}
	}
};
