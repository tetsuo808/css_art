module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		//
		concat: {
			dist: {
				src: [
					'js/*.js'
				],
				dest: 'js/dist/production.js',
			}
		},

		//
		uglify: {
			build: {
				src: 'js/dist/production.js',
				dest: 'js/dist/production.min.js'
			}
		},

		//
		sass: {
		  dev: {
			files: {
			  'css/style.css': 'css/style.scss'
			},
			options: {
			  style: 'expanded',
              require: 'sass-timestamp'
			}
		  },
		  dist: {
			files: {
			  'css/dist/style.css': 'css/style.scss'
			},
			options: {
			  style: 'compressed'
			}
		  }
		},

		//
		watch: {
			css: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};
