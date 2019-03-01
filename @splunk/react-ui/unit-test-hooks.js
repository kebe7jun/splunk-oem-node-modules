import 'raf/polyfill';

import Enzyme from 'enzyme';
import EnzymeAdapterReact16 from 'enzyme-adapter-react-16';

setupTestApp(() => ({
    appSetup() {
        const adapter = new EnzymeAdapterReact16();
        Enzyme.configure({ adapter });

        // required due to our use of assert.throws() in combination with react and mocha's custom error handling
        window.onerror = () => {};
        Error.prototype.suppressReactErrorLogging = true;
        DOMException.prototype.suppressReactErrorLogging = true;
    },
}));
