'use strict';
var hooker = require('hooker');
var convert = new (require('ansi-to-html'))();
var ws = require('ws');

module.exports = function (grunt) {

  grunt.registerTask('browser_output', 'Redirect grunt output to the browser.', function () {

    var options = this.options({port:37901});

    //start server
    var WebSocketServer = ws.Server;

    var wss;
    if (!options.ssl){
      wss = new WebSocketServer({port: options.port});
    } else {
      var processRequest = function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Not implemented');
      };
      var app = require('https').createServer({
        key: options.key,
        cert: options.cert,
        passphrase: options.passphrase
      },processRequest).listen(options.port);

      wss = new WebSocketServer({server:app});
    }


    wss.broadcast = function(data) {
      for(var i in this.clients) {
        this.clients[i].send(JSON.stringify(data));
      }
    };

    hooker.hook(process.stdout,'write', function() {

      var data = {};

      if (arguments[0] === '\x1b[2K') {
        data = {removeLine:true};
      } else if (arguments[0] === '\x1b[1G'){
        //do nothing
        return;
      } else {
        var html = convert.toHtml(arguments[0]);
        // var html = ansi_up.ansi_to_html(arguments[0]);
        if (html[0] !== '<') {
          html = '<span>' + html + '</span>';
        }
        //such hack
        html = html.replace(/color:#A50/gm,'color:#F0E68C');
        data = {
          line: html,
          orig: arguments[0],
          //such hack, much wow
          isError: arguments[0].indexOf('Warning:') === 5
        };
      }

      wss.broadcast(data);
    });

  });

};
