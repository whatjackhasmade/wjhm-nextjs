const isString = val => typeof val === `string` || val instanceof String;

export function decodeHTML(html) {
  if (!html) return html;
  if (!isString(html)) return html;
  html = html.replace(`amp;`, ``);
  return html.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}

export default decodeHTML;
