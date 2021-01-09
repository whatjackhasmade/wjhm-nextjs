/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { GalleryContainer } from '../../case.styles';

import { MediaItem } from 'wjhmtypes';

declare type CaseGalleryProps = {
  images?: MediaItem[];
  small?: boolean;
};

const CaseGallery: React.FC<CaseGalleryProps> = (props: CaseGalleryProps) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const { images, small } = props;
  const hasImages: boolean = images?.length > 0;
  if (!hasImages) return null;

  let classList: string = `gallery`;
  if (small) classList += ` gallery--small`;
  if (inView) classList += ` gallery--show`;

  return (
    <GalleryContainer className={classList} ref={ref}>
      {images.map(image => (
        <GalleryImage {...image} key={image?.mediaItemUrl} />
      ))}
    </GalleryContainer>
  );
};

const GalleryImage: React.FC<MediaItem> = (props: MediaItem) => {
  const src: string = props.mediaItemUrl;
  const key: string = src;

  return (
    <div className="gallery__image__wrapper">
      <div className="gallery__image">
        <Image alt={props.altText} key={key} src={src} height={1280} width={1920} />
      </div>
    </div>
  );
};

export default CaseGallery;
