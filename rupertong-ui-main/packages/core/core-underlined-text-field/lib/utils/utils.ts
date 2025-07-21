/**
 * Get total width of child elements inside an HTML Element
 * @param element {HTMLElement} parent HTML element
 */
export const getTotalOuterWidthOfChildElements = (
  element?: HTMLElement | null
): number => {
  if (!element) return 0;
  const children = element.children;
  return Array.from(children).reduce((accum, elem) => {
    const style = window.getComputedStyle(elem);
    const outerWidth =
      (elem as HTMLElement).offsetWidth +
      parseFloat(style.getPropertyValue('margin-left')) +
      parseFloat(style.getPropertyValue('margin-right'));
    return (accum += outerWidth);
  }, 0);
};
