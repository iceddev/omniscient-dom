# omniscient-dom

[![Travis Build Status](https://img.shields.io/travis/iceddev/omniscient-dom/master.svg?label=travis&style=flat-square)](https://travis-ci.org/iceddev/omniscient-dom)

DOM abstraction for React using omniscient

## Usage

```js
var React = require('react');
var component = require('omniscient');
var { div } = require('omniscient-dom')(component);

React.render(div({ className: 'myDiv' }), document.body);
```

## License

MIT
