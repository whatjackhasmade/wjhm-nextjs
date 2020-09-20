export function autoParagraph(html) {
  if (!html) return null;
  return `<p>` + html.split(/\n/).join(`</p>\n<p>`) + `</p>`;
}

export default autoParagraph;
