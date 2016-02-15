/*
	Copyright (C) Secure Link Services AG. <info@selise.ch>
	This file is part of SELISE ECAP (Enterprise Cloud Application Platform)
	Any code from SELISE ECAP can not be copied, distributed, reused, published without explicit written and signed permission of management of Secure Link Services AG.
*/
module.exports = function (grunt) {
    grunt.registerTask("generate-selise-mystique-style", function () {
        var sassTask = new grunt.taskExt.SassTask();
        //sassTask.options.style = 'expanded';
        sassTask.files['selise-mystique.min.css'] = 'scss/selise-mystique.scss';
        sassTask.execute();
    });
}