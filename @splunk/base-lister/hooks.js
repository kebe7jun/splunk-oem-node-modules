import 'raf/polyfill';

import Enzyme from 'enzyme';
import EnzymeAdapterReact16 from 'enzyme-adapter-react-16';

setupTestApp(() => ({
    appSetup() {
        const adapter = new EnzymeAdapterReact16();
        Enzyme.configure({ adapter });
    },
}));
