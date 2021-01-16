export { autoParagraph } from './autoParagraph';
export { camelToKebab } from './camelToKebab';
export { createCSSVars } from './createCSSVars';
export { createRelative } from './createRelative';
export { decodeHTML } from './decodeHTML';
export { generateID } from './generateID';
export { hexToRGB } from './hexToRGB';
export { htmlDecode } from "./htmlDecode"
export { httpTohttps } from './httpTohttps';
export { isAnObject } from './isAnObject';
export { isEmptyObject } from './isEmptyObject';
export { isInternal } from './isInternal';
export { isString } from './isString';
export { prettyDate } from './prettyDate';
export { slugify } from "./slugify"
export { windowAvailable } from './windowAvailable';

export function randomID() {
  return Math.random().toString(36).substring(7);
}

export function removeDimensions(html) {
  if (!html) return null;
  html = html.replace(/width="[^"]*"/g, ``);
  html = html.replace(/height="[^"]*"/g, ``);
  return html;
}

export function removeOrphans(html) {
  if (!html) return null;
  return html.replace(/([^]*)$/, ` $1`);
}

export function slugTitle(html) {
  if (!html) return null;
  html = html.replace(`-`, ` `);
  html = html.toLowerCase().split(` `);
  for (let i = 0; i < html.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    html[i] = html[i].charAt(0).toUpperCase() + html[i].substring(1);
  }
  // Directly return the joined string
  return html.join(` `);
}

export function youtubeID(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}
