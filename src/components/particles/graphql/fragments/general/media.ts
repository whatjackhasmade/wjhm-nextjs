export const MediaFragment = /* GraphQL */ `
  altText
  caption
  date
  id
  mediaDetails {
    sizes {
      height
      name
      sourceUrl
      width
    }
  }
  mediaItemUrl
  mediaType
  status
  title(format: RENDERED)
  uri
  xs: sourceUrl(size: FEATURED_XS)
  sm: sourceUrl(size: FEATURED_SM)
  md: sourceUrl(size: FEATURED_MD)
  lg: sourceUrl(size: FEATURED_LG)
  xl: sourceUrl(size: FEATURED_XL)
`;

export default MediaFragment;
