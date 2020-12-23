import React from 'react';
import { useQuery } from 'react-query';

import StyledBookmark from './bookmark.styles';

const scraperURL = process.env.NEXT_PUBLIC_GRAPH_SCRAPER || `https://wjhm-opengraphscraper.herokuapp.com/?url=`;

type BookmarkProps = {
  url: string;
};

const fetchBookmark = async url => await fetch(scraperURL + url);

const Bookmark = (props: BookmarkProps) => {
  const { url } = props;
  const { data: res, error, isLoading: loading } = useQuery([`fetchBookmark`, { url }], () => fetchBookmark(url));
  const data = res?.data;

  const hasImage = Boolean(data?.ogImage) || Boolean(data?.ogImage?.length > 0);

  if (!data) return null;

  return (
    <StyledBookmark className="link" href={url}>
      <div className="link__image">
        {hasImage && <BookmarkImage altText={`Open Graph for ${url}`} image={data.ogImage} />}
        {!hasImage && <img alt={`Open Graph Fallback for ${url}`} />}
      </div>
      <div className="link__content">
        <h3 className="link__title">{data.ogTitle}</h3>
        <p className="link__description">{data.ogDescription}</p>
      </div>
    </StyledBookmark>
  );
};

declare type BookmarkImageSingleProps = {
  url: string;
};

declare type BookmarkImageProps = {
  altText?: string;
  image?: any | BookmarkImageSingleProps | BookmarkImageSingleProps[];
};

const BookmarkImage = (props: BookmarkImageProps) => {
  const { altText, image } = props;
  const isMultiple = image?.length > 0;

  if (!isMultiple) return <img alt={altText} src={image.url} />;
  return <img alt={altText} src={image[0].url} />;
};

export default Bookmark;
