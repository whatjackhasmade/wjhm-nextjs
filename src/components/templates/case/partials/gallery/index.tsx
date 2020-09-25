import React from 'react';
import { InView } from 'react-intersection-observer';

import { GalleryContainer } from '../../case.styles';

import { ImageLoader } from 'wjhm';

declare type CaseImage = {
  altText?: string;
  md?: string;
  mediaItemUrl?: string;
};
declare type CaseGalleryProps = {
  images?: CaseImage[];
  small?: boolean;
};

const CaseGallery = ({ images, small }: CaseGalleryProps) => {
  const hasImages = images?.length > 0;
  if (!hasImages) return null;

  let classList = `gallery`;
  if (small) classList += ` gallery--small`;

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref }) => (
        <GalleryContainer className={inView ? `${classList} gallery--show` : `${classList}`} ref={ref}>
          {images.map(image => (
            <div className="gallery__image__wrapper" key={image?.mediaItemUrl}>
              <div className="gallery__image">
                <ImageLoader alt={image.altText} key={image.mediaItemUrl} src={image.md} />
              </div>
            </div>
          ))}
        </GalleryContainer>
      )}
    </InView>
  );
};

export default CaseGallery;
