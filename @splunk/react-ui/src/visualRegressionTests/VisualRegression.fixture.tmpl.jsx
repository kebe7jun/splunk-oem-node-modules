import React from 'react';

const component = window.location.search.slice(1);
const examples = __EXAMPLES__; // eslint-disable-line no-undef

export default () =>
    examples[component] &&
    examples[component].map(Example => (
        <div style={{ margin: '10px', padding: '10px', border: '1px solid gray' }}>
            <Example />
        </div>
    ));
