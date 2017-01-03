const React = require('react');
const Card = require('./card');

class List extends React.Component {
    
    render(props) {
        var cards = this.props.cards.map(function(card, index) {
            return <Card text={card} key={index} />
        })
        return(
            <div className='list'>
            <div>
            {this.props.title}
            {cards}
            </div>
            <div>
            <form onSubmit={this.props.onSubmit}>
            <input onChange={this.props.onChange}></input>
            <button>Submit</button>
            </form>
            </div>
            </div>
            )
    }
}

module.exports = List;