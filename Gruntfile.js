/*global module:true*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			server: {
				options: {
					port: 8000,
					base: 'dev/'
				}
			}
		},

		copy: {
			html: {
				files: [
					{ expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'dev/' },
					{ expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'dist/' }
				]
			},
			images: {
				files: [
					{ expand: true, cwd: 'assets/images/', src: ['**/*'], dest: 'dev/images/'},
					{ expand: true, cwd: 'assets/images/', src: ['**/*'], dest: 'dist/images/'}
				]
			},
			js: {
				files: [
					{ expand: true, cwd: 'src/js/', src: ['**/*.js'], dest: 'dev/js/' },
					{ expand: true, cwd: 'src/js/', src: ['**/*.js'], dest: 'dist/js/' }
				]
			}
		},

		compass: {
			dev: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'dev/css',
					environment: 'development',
					outputStyle: 'expanded'
				}
			},
			dist: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'dist/css',
					environment: 'production',
					outputStyle: 'compressed'
				}
			}
		},

		// Put an _all.scss file in any directory inside our scss files, and
		// this task will write @import statements for every other _*.scss
		// file in that directory. Then simply @import your _all.scss file to
		// import the contents of the directory.
		'sass-directory-imports': {
			src: {
				options: {
					// By default, this task reports on the files it finds and what it
					// imports. This can be quieted if desired.
					quiet: false
				},
				files: {
					src: ['src/scss/**/_all.scss']
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			grunt: ['./Gruntfile.js'],
			src: ['src/js/**/*.js']
		},

		watch: {
			html: {
				files: ['src/**/*.html'],
				tasks: ['copy']
			},
			scss: {
				files: ['src/**/*.scss'],
				tasks: ['sass-directory-imports', 'compass']
			}
		},

		clean: ['dev/*', 'dist/*']
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load project tasks
	grunt.loadTasks('tasks');

	// Default task(s).
	grunt.registerTask('default', ['copy', 'jshint', 'sass-directory-imports', 'compass']);
	grunt.registerTask('watch-serve', ['connect', 'watch']);

};
