module.exports = function (grunt) {
    function sassTask() {
        var configName = 'sass';
        var config = grunt.config.get(configName) || {};
        config.dist = {};
        config.dist.options = {};
        config.dist.options.style = 'compressed'; //nested, compact, compressed, expanded
        config.dist.options.sourcemap = 'none';
        config.dist.files = {};
        return {
            config: config,
            files: config.dist.files,
            options: config.dist.options,
            execute: function () {
                grunt.config.set(configName, config);
                grunt.registerTask('_task_', [configName]);
                grunt.task.run('_task_');
            }
        }
    }

    grunt.taskExt = {};
    grunt.taskExt.SassTask = sassTask;
};