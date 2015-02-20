'use strict';

var lab = exports.lab = require('lab').script();
var code = require('code');

var React = require('react');
var omniscient = require('omniscient');

var components = require('../')(omniscient);

lab.experiment('components', function(){

  var props = { className: 'test' };
  var statics = { type: 'submit' };

  lab.test('works with props', function(done){
    var el = components.div(props);
    var result = React.renderToString(el);
    code.expect(result).to.contain('class="test"');
    done();
  });

  lab.test('accepts statics', function(done){
    var el = components.button(props, statics);
    var result = React.renderToString(el);
    code.expect(result).to.contain('type="submit"');
    done();
  });

  lab.test('does not mutate props or statics', function(done){
    var el = components.button(props, statics);
    var result = React.renderToString(el);
    code.expect(props).to.equal(props);
    code.expect(statics).to.equal(statics);
    done();
  });
});
