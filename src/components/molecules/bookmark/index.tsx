import React from 'react';
import { useQuery } from 'react-query';

import StyledBookmark from './bookmark.styles';

import { SmartImage } from 'wjhm';
import { Skeleton } from 'wjhm';

import { Error } from 'wjhm';

const scraperURL = process.env.NEXT_PUBLIC_GRAPH_SCRAPER || `https://wjhm-opengraphscraper.herokuapp.com/?url=`;

type BookmarkProps = {
  url: string;
};

const fetchBookmark = async url => {
  const res = await fetch(scraperURL + url);
  return res.json();
};

const Bookmark = (props: BookmarkProps) => {
  const { url } = props;
  const { data: res, error, isLoading: loading } = useQuery([`fetchBookmark`, { url }], () => fetchBookmark(url));

  // @ts-ignore
  const data = res?.data;

  let image = null;

  const hasTwitterImage: boolean = data?.twitterImage?.url && data.twitterImage.url.startsWith(`https://`);
  const hasOGImage: boolean = data?.ogImage?.url && data.ogImage.url.startsWith(`https://`);

  if (hasTwitterImage) image = data?.twitterImage?.url;
  if (hasOGImage) image = data?.ogImage?.url;

  const hasImage = Boolean(image);

  if (loading) return <Skeleton width={1000} height={200} />;
  if (error) return <Error error={error} />;
  if (!data) return null;

  return (
    <StyledBookmark className="link" href={url}>
      <div>
        <div className="link__image">
          {hasImage && <BookmarkImage altText={`Open Graph for ${url}`} image={image} />}
          {!hasImage && (
            <SmartImage src="/images/placeholder.png" alt={`Open Graph Fallback for ${url}`} height={100} width={100} />
          )}
        </div>
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

  return <img alt={altText} src={image} height={100} width={100} />;
};

export default Bookmark;
