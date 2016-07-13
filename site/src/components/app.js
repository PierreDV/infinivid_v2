import React, { Component } from 'react';
import util from 'util';

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
