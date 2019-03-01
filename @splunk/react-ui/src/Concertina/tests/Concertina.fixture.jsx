import React from 'react';
import Concertina from '@splunk/react-ui/Concertina';

function Basic() {
    const wrapperStyles = {
        position: 'relative',
        height: '400px',
        maxWidth: '600px',
    };

    return (
        <div style={wrapperStyles}>
            <Concertina id="concertina-fixture">
                <Concertina.Panel title="Panel 1" description="Description" panelId="panel1">
                    <div style={{ height: 400 }}>hello</div>
                </Concertina.Panel>
                <Concertina.Panel title="Panel 2" description="Description" panelId="panel2">
                    <div style={{ height: 400 }}>hello</div>
                </Concertina.Panel>
                <Concertina.Panel title="Panel 3" description="Description" panelId="panel3">
                    <div style={{ height: 400 }}>hello</div>
                </Concertina.Panel>
                <Concertina.Panel title="Panel 4" description="Description" panelId="panel4">
                    <div style={{ height: 200 }}>hello</div>
                </Concertina.Panel>
            </Concertina>
        </div>
    );
}

export default Basic;
