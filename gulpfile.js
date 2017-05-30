// this file tells gulp what to do when it runs

// 1.  use node.js 'require' command to import gulp plugin into this file
// bring in the gulp library and assign it to the 'gulp' variable

var gulp = require("gulp"),
    gutil = require("gulp-util");

//2.
// one of the core principles behind gulp is that you take
// some information and pass that through a plugin or filter
// and then the output of that plugin becomes the input of a new plugin.
// the method used for this is called "pipe" and it's part of what
// makes gulp easy to understand and use.  So I'll use "piping" to 
// process our Coffeescript files.  go to node cmd prompt type: npm install --save-dev gulp-coffee
// REQUIRE the plugin and assign it to a variable

var coffee = require("gulp-coffee");
// var sass = require("gulp-ruby-sass");	
var browserify = require("gulp-browserify");// instead of using a CDN (jquery, etc.)
var compass = require("gulp-compass");
var concat = require("gulp-concat");

// gulp.task("log", function(){
 
//  	gutil.log("workflows are awesome");


// });

var coffeeSources = ["components/coffee/tagline.coffee"];
var jsSources = [
	"components/scripts/rclick.js",
	"components/scripts/pixgrid.js",
	"components/scripts/tagline.js",
	"components/scripts/template.js"
];

var sassSources = ["components/sass/style.scss"];



// when I update (modify the process) any files piped in, open node, run gulp task command: gulp coffee 
gulp.task("coffee", function() {
	gulp.src(coffeeSources)
		.pipe(coffee({bare: true})
			.on("error", gutil.log))
		.pipe(gulp.dest("components/scripts"))
});


// when I update (modify the process) any files piped in, open node, run gulp task command: gulp js
gulp.task("js", function() {

	gulp.src(jsSources)
		.pipe(concat("script.js"))
		.pipe(browserify())
		.pipe(gulp.dest("builds/development/js"))

});

// when I update (modify the process) any files piped in, open node, run gulp task command: gulp js
gulp.task("compass", function() {

	gulp.src(sassSources)
		.pipe(compass({
			sass: "components/sass",
			image: "builds/development/images",
			style: "expanded",
			lineNumbers: true 
		}).on("error", gutil.log))
		.pipe(gulp.dest("builds/development/css"))

});

// for the "style" property in the compass object, go to // http://goo.gl/6bCLQo
// and  on the right nav, "output style" to see the options.  
// also, if you are adding any responsive library
// like bootstrap (?), add a "require" property under the style property


gulp.task("watch", function() {
	gulp.watch(coffeeSources, ["coffee"]);
	gulp.watch(jsSources, ["js"]);
	gulp.watch("components/sass/*.scss", ["compass"]);
});

gulp.task("default", ["coffee", "js", "compass", "watch"]);