var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../js/components/list');

describe('List component', function() {
    it('Renders the card text',  function() {
        var title = "Pokemon Card List";
        var cards = ["Bulbasaur","Charmander","Squirtle"];
        var renderer = TestUtils.createRenderer();
        renderer.render(<List title={title} cards={cards} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('list');
        
        console.log(result.props.children[1][0].props);
    });
});