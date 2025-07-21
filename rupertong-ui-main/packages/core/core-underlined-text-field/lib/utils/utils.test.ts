import { getTotalOuterWidthOfChildElements } from './utils';

describe('utils', () => {
  describe('getTotalOuterWidthOfChildElements', () => {
    document.body.innerHTML = '<div id="container"><button/><button/></div>';

    const originalOffsetWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetWidth'
    );

    const originalGetComputedStyle = Object.getOwnPropertyDescriptor(
      window,
      'getComputedStyle'
    );

    beforeAll(() => {
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        value: 500,
      });
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
          getPropertyValue: () => '10px',
        }),
      });
    });

    afterAll(() => {
      if (originalOffsetWidth) {
        Object.defineProperty(
          HTMLElement.prototype,
          'offsetWidth',
          originalOffsetWidth
        );
      }
      if (originalGetComputedStyle) {
        Object.defineProperty(
          window,
          'getComputedStyle',
          originalGetComputedStyle
        );
      }
    });

    it('calculates total width of children elements', () => {
      expect(
        getTotalOuterWidthOfChildElements(document.getElementById('container'))
      ).toBe(1040);
    });

    it('returns 0 when container is not defined', () => {
      expect(getTotalOuterWidthOfChildElements(undefined)).toBe(0);
    });
  });
});
