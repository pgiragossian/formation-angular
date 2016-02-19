module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
     watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [

          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-animate/angular-animate.js',
          'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
          'app/bower_components/angular-messages/angular-messages.js',
          'app/bower_components/angular-translate/angular-translate.js',
          'app/bower_components/angular-ui-router/release/angular-ui-router.js',
          'app/bower_components/moment/moment.js',
          'app/bower_components/moment/locale/fr.js',
          'app/bower_components/angular-moment/angular-moment.js',

          'app/ex5/modules/i18n/index.js',
          'app/ex5/modules/i18n/**/*.js', 
          'app/ex5/modules/modal/index.js',
          'app/ex5/modules/modal/**/*.js', 
          'app/ex5/modules/main/index.js',
          'app/ex5/modules/main/**/*.js', 
          'app/ex5/modules/api/index.js',
          'app/ex5/modules/api/**/*.js', 
          'app/ex5/modules/header/index.js',
          'app/ex5/modules/header/**/*.js',
          'app/ex5/modules/app/index.js',
          'app/ex5/modules/app/**/*.js'
          ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['concat', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};