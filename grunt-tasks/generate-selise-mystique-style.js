module.exports = function (grunt) {
    grunt.registerTask("generate-selise-mystique-style", function () {
        var sassTask = new grunt.taskExt.SassTask();
        //sassTask.options.style = 'expanded';
        sassTask.files['selise-mystique.min.css'] = 'scss/selise-mystique.scss';
        sassTask.execute();
    });
}