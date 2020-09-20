export const cssPop = (cssString: string) => {
  cssString = cssString.replace(/^.+?({)/, ``);
  cssString = cssString.replace(/}[^}]+$/, ``);
  return cssString;
};

export default cssPop;
