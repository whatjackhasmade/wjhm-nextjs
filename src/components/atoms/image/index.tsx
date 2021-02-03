import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import type { LazyLoadImageProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { getSizes } from './getSizes';

import StyledImage from './image.styles';

export interface CSSProperties extends React.CSSProperties {
  height?: number;
  width?: number;
}

declare type ImageProps = React.HTMLProps<HTMLImageElement> &
  LazyLoadImageProps &
  CSSProperties & {
    aspect: boolean;
  };

export const SmartImage: React.FC<ImageProps> = (props: ImageProps) => {
  const { altText, aspect = true, className, height, threshold = 600, scrollPosition, width } = props;
  let { placeholderSrc, src } = props;

  const sizes = getSizes(props);
  const hasSizes: boolean = sizes?.length > 0;

  if (hasSizes) {
    placeholderSrc = sizes[0].sourceUrl;

    const largestNeeded = sizes.find(image => {
      const isAbove = Number(image.width) >= Number(width);
      return isAbove;
    });
    const hasLargestNeeded = Boolean(largestNeeded);

    if (hasLargestNeeded) src = largestNeeded.sourceUrl;

    if (!hasLargestNeeded) {
      src = sizes[sizes.length - 1].sourceUrl;
    }
  }

  const percentage = (Number(height) / Number(width)) * 100;
  let style = { '--percentage': `${percentage}%` } as CSSProperties;

  const alt = altText ? altText : props.alt;

  let classList = `image`;
  if (className) classList += ` image--aspect`;
  if (className) classList += ` ${className}`;

  let effect = null;
  if (placeholderSrc) effect = 'blur';

  return (
    <StyledImage className={classList} style={style}>
      {aspect && (
        <div className="image__wrapper">
          <LazyLoadImage
            alt={alt}
            effect={effect}
            placeholderSrc={placeholderSrc}
            scrollPosition={scrollPosition}
            src={src}
            threshold={threshold}
          />
        </div>
      )}
      {!aspect && (
        <LazyLoadImage
          alt={alt}
          effect={effect}
          placeholderSrc={placeholderSrc}
          scrollPosition={scrollPosition}
          src={src}
          threshold={threshold}
        />
      )}
    </StyledImage>
  );
};

// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(SmartImage);
