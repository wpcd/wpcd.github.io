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
					"css/main.min.css": "less/main.less"
				}
			}
		},

		copy: {
			production: {
				files: [
					{ expand: true, src: 'index.html', dest: 'dist/' },
					{ expand: true, src: ['css/*.min.css'], dest: 'dist/' }
				],
				options: {
					process: function(content, srcpath) {
						if (scrpath === "index.html") {
							console.log(content.replace(/main.css/, "main.min.css"));
						}
					}
				}
			}
		}
	});

	grunt.registerTask('build', ['sprite', 'less:production', 'copy:production'])
};
