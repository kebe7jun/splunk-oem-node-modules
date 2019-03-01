import React from 'react';
import JSONTree from '@splunk/react-ui/JSONTree';

export default function Basic() {
    const obj = {
        names: [{ given: 'Han', family: 'Solo' }, { given: 'Luke', family: 'Skywalker' }],
        awesome: true,
        good: [4, 5, 6, 7],
        bad: [1, 2, 3],
    };

    return (
        <div>
            <JSONTree data-test="tree-fixture" json={JSON.stringify(obj)} />
            <JSONTree data-test="expanded-tree-fixture" json={JSON.stringify(obj)} expandChildren />
        </div>
    );
}
