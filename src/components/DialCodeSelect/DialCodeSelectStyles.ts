import { CSSObjectWithLabel } from 'react-select';

export const colorStyles = {
  control: (styles: CSSObjectWithLabel) => ({
    ...styles,
    minWidth: '110px'
  }),
  menu: (styles: CSSObjectWithLabel) => ({
    ...styles
  }),
  option: (styles: CSSObjectWithLabel) => {
    return {
      ...styles
    };
  }
};
