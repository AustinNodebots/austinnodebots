module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'src',
			src: [
				'**/*.{html,png,jpg,gif}',
				'CNAME'
			],
			dest: 'dist'
		}]
	}
};
