const React = require('react');
const List = require('./list');

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cards: []
        }
    }
    
    onAddInputChanged(event) {
        this.setState({
            text: event.target.value
        })
    }
    
    onAddSubmit(event) {
        event.preventDefault();
        var newArray = this.state.cards.slice();
        newArray.push(this.state.text);
        this.setState({
            cards: newArray
        })
    }
    
    render() {
        
        return(
            <List title={this.props.title} cards={this.state.cards} onChange={this.onAddInputChanged.bind(this)} onSubmit={this.onAddSubmit.bind(this)}/>
            )
    }
}

module.exports = ListContainer;