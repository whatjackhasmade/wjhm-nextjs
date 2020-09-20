import React, { useEffect, useState } from 'react';
import StyledBookmark from './bookmark.styles';

const scraperURL = process.env.GATSBY_OPEN_GRAPH_SCRAPER || `https://wjhm-opengraphscraper.herokuapp.com/?url=`;

type BookmarkProps = {
  url: string;
};

const Bookmark = ({ url }: BookmarkProps) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(scraperURL + url);
      const jsonPayload = await response.json();
      setData(jsonPayload.data);
      return jsonPayload;
    };

    getData();
  }, [url]);

  const hasImage = data?.ogImage || data?.ogImage?.length > 0;

  if (data)
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
  return null;
};

declare type BookmarkImageProps = {
  altText?: string;
  image?: BookmarkImageSingleProps | BookmarkImageSingleProps[];
};

declare type BookmarkImageSingleProps = {
  url: string;
};

const BookmarkImage = (props: BookmarkImageProps) => {
  const { altText, image } = props;
  const isMultiple = image?.length > 0;

  if (!isMultiple) return <img alt={altText} src={image.url} />;
  return <img alt={altText} src={image[0].url} />;
};

export default Bookmark;
