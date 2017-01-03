const React = require('react');
const List = require('./list');

class Board extends React.Component {
    
    render() {
        return(
            <div>
            {this.props.title}
            <List title={this.props.lists[0]} cards={[1,2,3]} />
            <List title={this.props.lists[1]} cards={[4,5,6]} />
            <List title={this.props.lists[2]} cards={[7,8,9]} />
            </div>
            )
    }
}

module.exports = Board;