module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'src',
			src: [
				'**/*.html',
				'CNAME'
			],
			dest: 'dist'
		}]
	}
};
