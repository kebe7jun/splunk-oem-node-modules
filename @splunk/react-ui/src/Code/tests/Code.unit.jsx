/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { each } from 'lodash';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Code from '@splunk/react-ui/Code';
import { getStyled } from '@splunk/react-ui/Themes';

const { StyledIndent } = getStyled('Code');

const value = `
import abc from 'something';

function Beard () {
    if (blast === 0) {
        return <div className="anger"></div>;
    }
    return (
        <div className="moist">
            {' '}Length and thickness
        </div>
    );
}

const freeStuff = (isBoss) => {
    return \`The price is $\{isBoss ? 0 : 999}\`;
};

`;

describe('Code', () => {
    let wrapper;

    const tokenCounts = {
        keyword: 8,
        number: 3,
        operator: 16,
        punctuation: 22,
        string: 6,
    };

    const setupCommonTasks = () => {
        it('renders', () => {
            assert.ok(wrapper);
        });

        it('does not change contents', () => {
            assert.equal(wrapper.text(), value);
        });

        it('tokenize contents', () => {
            each(tokenCounts, (val, key) => {
                const tokens = wrapper.find(`[partType="${key}"]`);
                assert.lengthOf(tokens, val);
            });
        });

        after(() => {
            wrapper.unmount();
        });
    };

    describe('no indent guide', () => {
        before(() => {
            wrapper = mount(<Code value={value} showIndentGuide={false} />);
        });

        setupCommonTasks();

        it('does not draw any indent guide', () => {
            assert.lengthOf(wrapper.find(StyledIndent), 0);
        });
    });

    describe('has indent guides', () => {
        const size = 4;

        before(() => {
            wrapper = mount(<Code value={value} indentChars={size} />);
        });

        setupCommonTasks();

        it('draws proper indent guides', () => {
            const indents = wrapper.find(StyledIndent);

            assert.lengthOf(indents, 14);
            indents.forEach(indent => {
                const text = indent.text();
                assert.lengthOf(text, size);
                assert.ok(text.match(/^\s*$/));
            });

            wrapper.text();
        });
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        wrapper = mount(<Code value={value} elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
