import React from 'react';
import Button from '@splunk/react-ui/Button';
import CloseButton from '@splunk/react-ui/CloseButton';
import Code from '@splunk/react-ui/Code';
import ColumnLayout, { Column, Row } from '@splunk/react-ui/ColumnLayout';
import DL from '@splunk/react-ui/DefinitionList';
import Heading from '@splunk/react-ui/Heading';
import Link from '@splunk/react-ui/Link';
import List from '@splunk/react-ui/List';
import { Splunk, Enterprise, Light, Cloud, Hunk } from '@splunk/react-ui/Logo';
import Message from '@splunk/react-ui/Message';
import Paragraph from '@splunk/react-ui/Paragraph';
import Progress from '@splunk/react-ui/Progress';
import ScreenReaderContent from '@splunk/react-ui/ScreenReaderContent';
import StaticContent from '@splunk/react-ui/StaticContent';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';

function Fixture() {
    return (
        <ColumnLayout data-test="column-layout">
            <Row>
                <Column span={6}>
                    <Heading level={3}>DefinitionList</Heading>
                    <DL data-test="definition-list" termWidth={300}>
                        <DL.Term>First Item</DL.Term>
                        <DL.Description>Description</DL.Description>
                        <DL.Term>Another Item with a Long Name</DL.Term>
                        <DL.Description>Description</DL.Description>
                        <DL.Term>Third Item</DL.Term>
                        <DL.Description>Description</DL.Description>
                        <DL.Term>Last Item</DL.Term>
                        <DL.Description>Description</DL.Description>
                    </DL>
                </Column>
                <Column span={6}>
                    <Heading level={3}>List</Heading>
                    {['disc', 'decimal', 'lower-alpha', 'upper-alpha'].map(type => (
                        <List key={type} type={type}>
                            <List.Item>Lorem ipsum dolor sit amet</List.Item>
                            <List.Item>Excepteur sint occaecat cupidatat non proident</List.Item>
                            <List.Item>Sed ut perspiciatis unde omnis</List.Item>
                        </List>
                    ))}
                </Column>
            </Row>
            <Row>
                <Column span={6}>
                    <Heading level={3}>Buttons</Heading>
                    {['default', 'primary', 'pill'].map(appearance => (
                        <Button key={appearance} appearance={appearance} label="lorem" />
                    ))}
                    <CloseButton />
                </Column>
                <Column span={6}>
                    <Heading level={3}>Messages</Heading>
                    {['info', 'success', 'warning', 'error'].map(type => (
                        <Message key={type} type={type}>{`A super ${type} message`}</Message>
                    ))}
                </Column>
            </Row>
            <Row>
                <Column span={6}>
                    <Heading level={3}>Paragraph</Heading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet,{' '}
                        <Link to="http://www.splunk.com" openInNewContext>
                            consectetur
                        </Link>{' '}
                        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </Paragraph>
                </Column>
                <Column span={6}>
                    <Heading level={3}>Screen Reader Content</Heading>
                    There should be hidden content here.
                    <ScreenReaderContent>
                        <span data-test="hidden-content-for-screen-reader">
                            I should be hidden!!!
                        </span>
                    </ScreenReaderContent>
                </Column>
            </Row>
            <Row>
                <Column span={12}>
                    <Heading level={3}>Progress Bars</Heading>
                    {[0, 10, 25, 65, 95, 100].map(percentage => (
                        <div key={percentage} style={{ margin: 25 }}>
                            <Progress percentage={percentage} />
                        </div>
                    ))}
                </Column>
            </Row>
            <Row>
                <Column span={4}>
                    <Heading level={3}>Static Content</Heading>
                    {['small', 'medium'].map(size => (
                        <StaticContent
                            key={size}
                            size={size}
                        >{`Render the text, ${size}`}</StaticContent>
                    ))}
                </Column>
                <Column span={4}>
                    <Heading level={3}>Wait Spinner</Heading>
                    {['small', 'medium'].map(size => <WaitSpinner key={size} size={size} />)}
                </Column>
                <Column span={4}>
                    <Heading level={3}>Headings</Heading>
                    {[1, 2, 3, 4, 's', 'ss'].map(level => (
                        <Heading key={level} level={level}>{`Heading ${level}`}</Heading>
                    ))}
                </Column>
            </Row>
            <Row>
                <Column span={6}>
                    <Heading level={3}>Logo</Heading>
                    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '2em' }}>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Splunk />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Enterprise />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Light />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Cloud />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Hunk />
                        </div>
                    </div>
                </Column>
                <Column span={6}>
                    <Heading level={3}>Logo Inverted</Heading>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            fontSize: '2em',
                            backgroundColor: '#333',
                            padding: '30px 0',
                        }}
                    >
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Splunk invert />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Enterprise invert />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Light invert />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Cloud invert />
                        </div>
                        <div
                            style={{
                                flexBasis: '50%',
                                padding: '30px 60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Hunk invert />
                        </div>
                    </div>
                </Column>
            </Row>
            <Row>
                <Column span={12}>
                    <Heading level={3}>Code</Heading>
                    <Code
                        value={`
function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
  }
`}
                    />
                </Column>
            </Row>
        </ColumnLayout>
    );
}

export default Fixture;
