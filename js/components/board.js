const React = require('react');
const ListContainer = require('./list-container');

class Board extends React.Component {
    
    render() {
        return(
            <div>
            {this.props.title}
            <ListContainer title={this.props.lists[0]} />
            <ListContainer title={this.props.lists[1]} />
            <ListContainer title={this.props.lists[2]} />
            </div>
            )
    }
}

module.exports = Board;