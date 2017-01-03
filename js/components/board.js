const React = require('react');
const List = require('./list');

class Board extends React.Component {
    onAddInputChanged() {
        console.log('onAddInputChanged');
    }
    
    onAddSubmit(event) {
        event.preventDefault();
        console.log('onAddSubmit');
    }
    
    render() {
        return(
            <div>
            {this.props.title}
            <List onChange={this.onAddInputChanged.bind(this)} onSubmit={this.onAddSubmit.bind(this)} title={this.props.lists[0]} cards={[1,2,3]} />
            <List onChange={this.onAddInputChanged.bind(this)} onSubmit={this.onAddSubmit.bind(this)} title={this.props.lists[1]} cards={[4,5,6]} />
            <List onChange={this.onAddInputChanged.bind(this)} onSubmit={this.onAddSubmit.bind(this)} title={this.props.lists[2]} cards={[7,8,9]} />
            </div>
            )
    }
}

module.exports = Board;