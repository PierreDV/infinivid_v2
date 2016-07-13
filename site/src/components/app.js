let React = require('react');
let util = require('util');
let Component = React.Component;

function App() {
  Component.call(this);
}

util.inherits(App, Component);

App.prototype.render = () => {
  return (
    <div>Infinivid Version 2</div>
  );
}

module.exports = App;
