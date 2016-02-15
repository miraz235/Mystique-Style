module.exports = function (grunt) {
    grunt.registerTask("build-style", function() {
        grunt.task.run('generate-selise-mystique-style');
    });
}