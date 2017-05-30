// Mustache.js function fo rusing a file caled data.json and mergin it with a template
// Javascript and JSON
// Chapter 4: Javascrpt and JSON in Action
// Javascript Templating with mustache.js

$(function() {
  var Mustache = require('mustache');

  $.getJSON('js/data.json', function(data) {
    var template = $('#speakerstpl').html();
    var html = Mustache.to_html(template, data);
    $('#speakers').html(html);    
  }); //getJSON
  
}); //function