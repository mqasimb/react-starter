require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const Board = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="React Board" lists={['A','B','C']}/>, document.getElementById('app'));
});