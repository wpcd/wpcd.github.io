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
				src: ['images/sprite/*.png'],
				destImg: 'images/sprite.png',
				destCSS: 'less/sprite.less',
				algorithm: 'binary-tree',
				padding: 2,
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

	grunt.registerTask('build', ['sprite:wpcd', 'less:production'])
};
