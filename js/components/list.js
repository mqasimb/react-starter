const React = require('react');
const Card = require('./card');

class List extends React.Component {
    
    render(props) {
        var cards = this.props.cards.map(function(card, index) {
            return <Card text={card} key={index} />
        })
        return(
            <div className='list'>
            {this.props.title}
            {cards}
            <form onSubmit={this.props.onSubmit}>
            <input onChange={this.props.onChange}></input>
            <button>Submit</button>
            </form>
            </div>
            )
    }
}

module.exports = List;