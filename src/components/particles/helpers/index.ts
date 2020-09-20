export { autoParagraph } from './autoParagraph';
export { camelToKebab } from './camelToKebab';
export { createCSSVars } from './createCSSVars';
export { createRelative } from './createRelative';
export { decodeHTML } from './decodeHTML';
export { generateID } from './generateID';
export { hexToRGB } from './hexToRGB';
export { httpTohttps } from './httpTohttps';
export { isAnObject } from './isAnObject';
export { isEmptyObject } from './isEmptyObject';
export { isInternal } from './isInternal';
export { isString } from './isString';
export { prettyDate } from './prettyDate';
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
  if (!url) return null;
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_]/i)[0] : url[0];
}
