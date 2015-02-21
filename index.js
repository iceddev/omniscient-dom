'use strict';

var React = require('react');
var omit = require('lodash.omit');
var assign = require('lodash.assign');

var elements = require('./elements');

function createComponents(omniscient){
  var scu = omniscient.shouldComponentUpdate;
  var components = {};

  elements.forEach(function(element){
    components[element] = omniscient(element, function(props, statics){
      // Best approach to "magically" turn this to a child?
      if (scu.isCursor(props) && !scu.isImmutable(props.deref())) {
        props = {
          children: props.deref()
        };
      }
      else if (scu.isCursor(props)) {
        props = props.deref();
      }

      if (scu.isImmutable(props)) {
        props = props.toJS();
      }

      if (scu.isImmutable(statics)) {
        statics = statics.toJS();
      }
      var _props = assign({}, omit(props, 'statics'), statics);
      return React.createElement(element, _props)
    });
  });

  return components;
}

module.exports = createComponents;
