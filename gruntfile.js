module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      min: {
        files: grunt.file.expandMapping(
          ["public/**/*.js", "!public/**/*.min.js"],
          "./",
          {
            rename: function(destBase, destPath) {
              return destBase + destPath.replace(".js", ".min.js");
            }
          }
        )
      }
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "public/stylesheets",
            src: ["**/*.css", "!*.min.css"],
            dest: "public/stylesheets",
            ext: ".min.css"
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["cssmin", "uglify"]);
};
