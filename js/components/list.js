const React = require('react');
const Card = require('./card');

class List extends React.Component {
    
    render() {
        return(
            <div className='list'>
            <div>
            {this.props.title}
            <Card text={this.props.cards[0]}/>
            <Card text={this.props.cards[1]}/>
            <Card text={this.props.cards[2]}/>
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