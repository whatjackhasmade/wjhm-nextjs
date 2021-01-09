/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';

import { parseHTML } from 'wjhm';

import Duotone from './duotone';
import HeroComponent from './hero.styles';
import HeroMediaComponent from './media.styles';

type HeroProps = {
  align?: string;
  backgroundColour?: string;
  children?: any;
  content?: string;
  duotone?: boolean;
  maxWidth?: string;
  media?: {
    altText: string;
    mediaItemUrl: string;
  };
  overlay?: boolean;
};

type HeroMediaProps = {
  altText?: string;
  background?: string;
  duotone: boolean;
  media?: {
    altText: string;
    mediaItemUrl: string;
  };
  overlay?: boolean;
};

const Hero = (props: HeroProps) => {
  const { align = `left`, backgroundColour, children, content } = props;
  const { duotone = false, maxWidth, media, overlay = true } = props;

  if (!content) {
    return (
      <HeroComponent align={align} maxWidth={maxWidth}>
        <div className="hero__wrapper">
          <div className="hero__contents">{children}</div>
        </div>
      </HeroComponent>
    );
  }

  return (
    <HeroComponent background={backgroundColour} overlay={overlay}>
      <div className="hero__wrapper">
        {content ? (
          <div className="hero__contents">{parseHTML(content)}</div>
        ) : (
          <div className="hero__contents">{children}</div>
        )}
        {media && (
          <HeroMedia
            altText={media.altText}
            background={backgroundColour}
            duotone={duotone}
            media={media}
            overlay={overlay}
          />
        )}
      </div>
    </HeroComponent>
  );
};

const HeroMedia = (props: HeroMediaProps) => {
  const { altText, background, duotone, media, overlay } = props;

  return (
    <HeroMediaComponent background={background} overlay={overlay}>
      {duotone && (
        <Duotone className="hero__media">
          <HeroImage altText={altText} src={media} />
        </Duotone>
      )}
      {!duotone && <HeroImage altText={altText} src={media} />}
    </HeroMediaComponent>
  );
};

declare type HeroImageProps = {
  altText: string;
  src: {
    mediaItemUrl: string;
  };
};

const HeroImage = (props: HeroImageProps) => {
  const { altText, src } = props;

  return (
    <div className="hero__media">
      <Image src={src.mediaItemUrl} alt={altText} layout="fill" priority={true} />
    </div>
  );
};

export default Hero;
