import * as React from 'react';

declare type FeaturedImageProps = {
  className?: string;
} & MediaItem;

declare type MediaSizeQuery = {
  query?: string;
} & MediaSize;

const FeaturedImage = (props: FeaturedImageProps) => {
  const { altText, className, mediaDetails, mediaItemUrl } = props;

  let classList = `featured-image`;
  if (className) classList += ` ${className}`;

  return (
    <div className={classList}>
      <picture>
        <ImageSizes mediaDetails={mediaDetails} />
        <img src={mediaItemUrl} alt={altText} />
      </picture>
    </div>
  );
};

declare type ImageSizesProps = {
  mediaDetails: {
    sizes: any;
  };
};

const ImageSizes = (props: ImageSizesProps) => {
  const mediaDetails = props?.mediaDetails;
  const sizes = mediaDetails?.sizes;
  if (!sizes) return null;

  const hasSizes = sizes.length > 0;
  if (!hasSizes) return null;

  const toSort = [...sizes];
  const sortedSizes = toSort.sort((a, b) => Number(b.width) - Number(a.width));

  const smartSizes = sortedSizes.map((curr: MediaSizeQuery, i, array) => {
    const end = i + 1 === array.length;
    if (end) return curr;
    curr = {
      ...curr,
      query: array[i + 1].width,
    };
    return curr;
  });

  const hasSmartSizes = smartSizes.length > 0;
  if (!hasSmartSizes) return null;

  const toRender = smartSizes.map(
    s =>
      s.query && <source key={`${s.query}-${s.sourceUrl}`} media={`(min-width: ${s.query}px)`} srcSet={s.sourceUrl} />,
  );

  return <>{toRender}</>;
};

export default FeaturedImage;
