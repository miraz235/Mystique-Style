﻿/*
	Copyright (C) Secure Link Services AG. <info@selise.ch>
	This file is part of SELISE ECAP (Enterprise Cloud Application Platform)
	Any code from SELISE ECAP can not be copied, distributed, reused, published without explicit written and signed permission of management of Secure Link Services AG.
*/
module.exports = function (grunt) {
    grunt.registerTask("build-style", function() {
        grunt.task.run('generate-selise-mystique-style');
    });
}