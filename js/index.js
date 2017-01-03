require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Board = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});