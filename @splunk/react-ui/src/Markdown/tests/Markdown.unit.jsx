/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { mount } from 'enzyme';
import { spy, stub } from 'sinon';

import Code from '@splunk/react-ui/Code';
import Heading from '@splunk/react-ui/Heading';
import Link from '@splunk/react-ui/Link';
import List from '@splunk/react-ui/List';
import P from '@splunk/react-ui/Paragraph';
import Markdown from '@splunk/react-ui/Markdown';

const cases = {
    blockquote: '> Fear is the path to the dark side',
    bulletList: `
- Item 1
- Item 2
- Item 3
`,
    code: `
\`\`\`clike
var someCode = "isHere";
function goWild () {
  console.log('woof');
}
\`\`\`
`,
    codeLiteral: `
Code \`var someCode = "isHere"\` like this
`,
    heading: `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
`,
    image: '![yoda](/an/image/of/yoda/this/is.png)',
    html: `
<div></div>
`,
    link: '[Github](https://github.com)',
    ordererdList: `
1. Item 1
2. Item 2
3. Item 2
`,
    paragraph: 'nothing suspecious here',
};

describe('Markdown', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    it('renders paragraph correctly', () => {
        wrapper = mount(<Markdown text={cases.paragraph} />);
        assert.lengthOf(wrapper.find(P), 1);
    });

    it('renders blockquotes correctly', () => {
        wrapper = mount(<Markdown text={cases.blockquote} />);
        assert.lengthOf(wrapper.find('blockquote'), 1);
    });

    it('renders bullet list correctly', () => {
        wrapper = mount(<Markdown text={cases.bulletList} />);
        const list = wrapper.find(List);
        assert.ok(list, 'has <List>');
        assert.equal(list.prop('type'), 'disc', 'with prop type="disc"');
        assert.lengthOf(list.find(List.Item), 3, 'has 3 <List.Item> inside');
    });

    it('renders ordered list correctly', () => {
        wrapper = mount(<Markdown text={cases.ordererdList} />);
        const list = wrapper.find(List);
        assert.ok(list, 'has <List>');
        assert.equal(list.prop('type'), 'decimal', 'with prop type="decimal"');
        assert.lengthOf(list.find(List.Item), 3, 'has 3 <List.Item> inside');
    });

    it('renders code block correctly', () => {
        wrapper = mount(<Markdown text={cases.code} />);
        const codeBlock = wrapper.find(Code);
        assert.ok(codeBlock);
        assert.equal(codeBlock.prop('language'), 'clike', 'with proper lang');
    });

    it('renders code literal correctly', () => {
        wrapper = mount(<Markdown text={cases.codeLiteral} />);
        const code = wrapper.find('code');
        assert.ok(code);
        assert.lengthOf(code, 1, 'has 1 <code>');
    });

    it('renders headings correctly', () => {
        wrapper = mount(<Markdown text={cases.heading} />);
        const headings = wrapper.find(Heading);
        assert.lengthOf(headings, 6, 'renders 6 <Heading>s');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 1), 1, 'has 1 level 1');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 2), 1, 'has 1 level 2');
        assert.lengthOf(headings.filterWhere(h => h.prop('level') === 3), 1, 'has 1 level 3');
        assert.lengthOf(
            headings.filterWhere(h => h.prop('level') === 4),
            3,
            'has 3 level 4 (includes levels 5 and 6)'
        );
    });

    it('renders images correctly', () => {
        wrapper = mount(<Markdown text={cases.image} />);
        const image = wrapper.find('img');
        assert.lengthOf(image, 1, 'has 1 <img>');
        assert.equal(image.prop('src'), '/an/image/of/yoda/this/is.png');
        assert.equal(image.prop('alt'), 'yoda');
    });

    it('renders link correctly', () => {
        wrapper = mount(<Markdown text={cases.link} />);
        const link = wrapper.find(Link);
        assert.lengthOf(link, 1, 'has 1 <Link>');
        assert.equal(link.prop('to'), 'https://github.com');
        assert.equal(link.text(), 'Github');
    });

    it('escapes html contents', () => {
        wrapper = mount(<Markdown text={cases.html} />);
        assert.equal(wrapper.text().trim(), cases.html.trim());
    });

    it('calls custom blockquote renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown blockquoteRenderer={renderer} text={cases.blockquote} />);
        assert.isTrue(renderer.calledOnce);
    });

    it('calls custom code renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown codeRenderer={renderer} text={cases.codeLiteral} />);
        assert.isTrue(renderer.calledOnce);
    });

    it('calls custom code block renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown codeBlockRenderer={renderer} text={cases.code} />);
        assert.isTrue(renderer.calledOnce);
    });

    it('calls custom heading renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown headingRenderer={renderer} text={cases.heading} />);
        assert.equal(renderer.callCount, 6);
    });

    it('calls custom image renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown imageRenderer={renderer} text={cases.image} />);
        assert.equal(renderer.callCount, 1);
    });

    it('calls custom link renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown linkRenderer={renderer} text={cases.link} />);
        assert.isTrue(renderer.calledOnce);
    });

    it('calls custom list renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown listRenderer={renderer} text={cases.bulletList} />);
        assert.isTrue(renderer.calledOnce);
    });

    it('calls custom item renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown itemRenderer={renderer} text={cases.bulletList} />);
        assert.isTrue(renderer.calledThrice);
    });

    it('calls custom paragraph renderer', () => {
        const renderer = stub().returns(null);
        wrapper = mount(<Markdown paragraphRenderer={renderer} text={cases.paragraph} />);
        assert.isTrue(renderer.calledOnce);
    });

    it('supports elementRef', () => {
        const elementRef = spy();
        wrapper = mount(<Markdown text={cases.paragraph} elementRef={elementRef} />);
        assert.isTrue(elementRef.calledOnce, 'elementRef was called');
        wrapper.unmount();
        assert.isTrue(elementRef.calledTwice, 'elementRef was called again on unmount');
        assert.isNull(elementRef.args[1][0], 'elementRef was called with null on unmount');
    });
});
