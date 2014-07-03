module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: 'src',
			src: [
				'**/*.{html,png,jpg,gif,js}',
				'CNAME'
			],
			dest: 'dist'
		}]
	}
};
