module.exports = function(grunt) {
	// Load all Grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['less/**/*.less', 'javascript/**/*.js', 'index.html'],
			options: {
				livereload: true
			},
			tasks: ['less:development']
		},

		sprite: {
			wpcd: {
				src: 'images/sprite/**/*.*',
				destImg: 'images/sprite.png',
				destCSS: 'less/sprite.less',
				padding: 2,
			},

			wpcd_2x: {
				src: 'images/sprite-2x/**/*.*',
				destImg: 'images/sprite-2x.png',
				destCSS: 'less/sprite-2x.less',
				padding: 4,
			}
		},

		less: {
			development: {
				files: {
					"css/main.css": "less/main.less"
				}
			},
			production: {
				options: {
					compress: true,
					cleancss: true
				},
				files: {
					"dist/css/main.css": "less/main.less"
				}
			}
		},

		uglify: {
			production: {
				files: {
					'dist/javascript/main.js': ['javascript/main.js']
				}
			}
		},

		imagemin: {
			production: {
				options: {
					optimizationLevel: 5
				},
				files: [{
					expand: true,
					src: ['images/*.jpg', 'images/*.png', 'images/*.gif'],
					dest: 'dist'
				}]
			}
		},

		htmlmin: {
			production: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					preserveLineBreaks: true,
					minifyJS: true,
					minifyCSS: true
				},
				files: {
					'dist/index.html': 'index.html'
				}
			}
		},

		copy: {
			production: {
				files: [
					{ expand: true, src: ['css/*.min.css'], dest: 'dist/' },
					{ expand: true, src: [ 'javascript/**/*.min.js'], dest: 'dist/' },
					{ expand: true, src: ['images/*.zip'], dest: 'dist/', filter: 'isFile' }
				]
			}
		}
	});

	grunt.registerTask('build', ['sprite', 'less:production', 'uglify:production', 'htmlmin:production', 'imagemin:production', 'copy:production'])
};
