export const getVar = (property, element) =>
  getComputedStyle(element).getPropertyValue(property);
