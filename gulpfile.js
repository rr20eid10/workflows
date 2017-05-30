// this file tells gulp what to do when it runs

// 1.  use node.js 'require' command to import gulp plugin into this file
// bring in the gulp library and assign it to the 'gulp' variable
var gulp = require("gulp"),
    gutil = require("gulp-util");


gulp.task("log", function(){
 
 	gutil.log("workflows are awesome");

});
