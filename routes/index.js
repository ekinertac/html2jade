

var print = function(a){console.log(a)}

var html_jade = require('../node_modules/html2jade/lib/html2jade.js');
var jade_html = require('jade');
var fs = require('fs');
var col = require('cli-color');

exports.index = function(req, res){
    res.render('layout', { 
        title: 'Html/Jade Converter'
    });
    console.log(col.red('new user here'))
};

exports.html = function(req, res){
    var htmlContent = req.body.content;
    html_jade.convertHtml(htmlContent, {}, function (err, jade) {
        res.send(jade)
    });
}

exports.jadePar = function(req, res){
    var jadeContent = req.body.content;
    jade_html.render(jadeContent, {pretty: true}, function(err, html){
        res.send(html);
        console.log(err);
    });
}
