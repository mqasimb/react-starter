const React = require('react');
const Card = require('./card');

class List extends React.Component {
    
    render() {
        return(
            <div>
            <Card />
            <Card />
            <Card />
            </div>
            )
    }
}

module.exports = List;