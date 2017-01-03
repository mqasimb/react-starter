const React = require('react');

class Card extends React.Component {
    
    render() {
        return (
            <div>
            {this.props.text}
            </div>
            )
    }
}

module.exports = Card;