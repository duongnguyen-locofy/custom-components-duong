import '@testing-library/jest-dom';
import '@testing-library/dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
if (typeof CSS === 'undefined' || !CSS.supports) {
  (global as any).CSS = { supports: () => true };
}
