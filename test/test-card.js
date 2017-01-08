var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components/card');

describe('Card component', function() {
    it('Renders the card text',  function() {
        var text = "Pokemon Card";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

        var card = result.props.children;
        card.should.equal(text);
    });
});