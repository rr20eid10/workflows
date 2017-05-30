// this file tells gulp what to do when it runs

// 1.  use node.js 'require' command to import gulp plugin into this file
// bring in the gulp library and assign it to the 'gulp' variable

var gulp = require("gulp"),
    gutil = require("gulp-util");

//2.
// one of the core principles behind gulp is that you take
// some information and pass tht through a plugin or filter
// and then the output of that plugin becomes the input of a new plugin.
// the method used for this is called "pipe" and it's part of what
// makes gulp easy to understand and use.  So I'll use "piping" to 
// process our Coffeescript files.  go to node cmd prompt type: npm install --save-dev gulp-coffee
// REQUIRE the plugin and assign it to a variable

var coffee = require("gulp-coffee");


// gulp.task("log", function(){
 
//  	gutil.log("workflows are awesome");


// });

var coffeeSources = ["components/coffee/tagline.coffee"]
gulp.task("coffee", function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on("error", gutil.log))
		.pipe(gulp.dest("components/scripts"));
});

