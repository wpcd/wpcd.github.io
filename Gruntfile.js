module.exports = function(grunt) {
	// Load all Grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['less/**/*.less', 'js/**/*.js', 'index.html'],
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
				algorithm: 'binary-tree',
				padding: 2,
				cssFormat: 'less',
				cssOpts: {
					cssClass: function(item) { return '.sprite-'+item.name;}
				}
			},

			wpcd_2x: {
				src: 'images/sprite-2x/**/*.*',
				destImg: 'images/sprite-2x.png',
				destCSS: 'less/sprite-2x.less',
				algorithm: 'binary-tree',
				padding: 4,
				cssFormat: 'less',
				cssOpts: {
					cssClass: function(item) { return '.sprite-'+item.name;}
				}
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
					"css/main.css": "less/main.less"
				}
			}
		}
	});

	grunt.registerTask('build', ['sprite', 'less:production'])
};
