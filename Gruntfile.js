module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var pngquant = require('imagemin-pngquant');

  grunt.initConfig({
    clean: {
      dist: ['dist']
    },
    useminPrepare: {
      html: 'index.html'
    },
    copy:{
      dist:{
        files:[{
          expand: true,
          dot: true,
          cwd: '',
          dest: 'dist',
          src:['*.html']
        }]
      }
    },
    usemin: {
      html: 'dist/index.html',
      options: {
        assetsDirs: ['dist']
      }
    },
    imagemin: {                          // Task
      dist: {
        options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant()]
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/img'                  // Destination path prefix
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        file: {
          'hello.html': 'index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib");
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', [
    'clean:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'usemin',
    'imagemin:dist',
    'htmlmin:dist'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'usemin',
    'imagemin:dist',
    'htmlmin:dist'
  ]);

};
