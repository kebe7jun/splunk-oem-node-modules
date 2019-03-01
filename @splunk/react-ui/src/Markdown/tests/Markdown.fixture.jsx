import React from 'react';
import Markdown from '@splunk/react-ui/Markdown';

const text = `
# Markdown test

## List

- bullet point is awesome
- best way
    - to present concepts
    - and explain messy stuff
    - and make a good point

## Inline code
    
This has \`code\` in it.

## Link

Link to [Overview](Overview)
`;

export default () => <Markdown text={text} />;
