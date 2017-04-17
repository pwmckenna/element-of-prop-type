import { render } from 'enzyme';
import React, { Component } from 'react';
import elementOf from '../src';

class Child extends Component {
    static displayName = 'Child';
    render = () => null
};

class Parent extends Component {
    static propTypes = {
        children: elementOf(Child)
    };
    render = () => <div>{this.props.children}</div>;
}

describe('element-of-prop-type', () => {
    it('checks children propType', () => {
        const component = render((
            <Parent>
                <div/>
            </Parent>
        ));
    })
});
