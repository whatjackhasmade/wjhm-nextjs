export const slugify = (text: string): string => {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, `-and-`)         // Replace & with 'and'
    .replace(/[\s\W-]+/g, `-`)      // Replace spaces, non-word characters and dashes with a single dash (-)
}

export default slugify;