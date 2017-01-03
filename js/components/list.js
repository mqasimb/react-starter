const React = require('react');
const Card = require('./card');

class List extends React.Component {
    
    render() {
        return(
            <div>
            {this.props.title}
            <Card text={this.props.cards[0]}/>
            <Card text={this.props.cards[1]}/>
            <Card text={this.props.cards[2]}/>
            </div>
            )
    }
}

module.exports = List;