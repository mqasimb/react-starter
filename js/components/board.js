const React = require('react');
const List = require('./list');

class Board extends React.Component {
    
    render() {
        return(
            <div>
            <List />
            <List />
            <List />
            </div>
            )
    }
}

module.exports = Board;