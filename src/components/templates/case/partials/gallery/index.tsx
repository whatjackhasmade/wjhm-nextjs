/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';

import { GalleryContainer } from '../../case.styles';

import { ImageLoader } from 'wjhm';

import { MediaItem } from 'wjhmtypes';

declare type CaseGalleryProps = {
  images?: MediaItem[];
  small?: boolean;
};

const CaseGallery: React.FC<CaseGalleryProps> = (props: CaseGalleryProps) => {
  const { images, small } = props;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const hasImages: boolean = images?.length > 0;
  if (!hasImages) return null;

  let classList: string = `gallery`;
  if (small) classList += ` gallery--small`;
  if (inView) classList += ` gallery--show`;

  return (
    <GalleryContainer className={classList} ref={ref}>
      {images.map(image => (
        <Image {...image} key={image?.mediaItemUrl} />
      ))}
    </GalleryContainer>
  );
};

const Image: React.FC<MediaItem> = (props: MediaItem) => {
  return (
    <div className="gallery__image__wrapper">
      <div className="gallery__image">
        <ImageLoader alt={props.altText} key={props.mediaItemUrl} src={props.md} />
      </div>
    </div>
  );
};

export default CaseGallery;
