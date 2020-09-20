import React from 'react';
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

const Hero = ({
  align = `left`,
  backgroundColour,
  children,
  content,
  duotone = false,
  maxWidth,
  media,
  overlay = true,
}: HeroProps) => {
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

const HeroMedia = ({ altText, background, duotone, media, overlay }: HeroMediaProps) => (
  <HeroMediaComponent background={background} overlay={overlay}>
    {duotone && (
      <Duotone className="hero__media">
        <HeroImage altText={altText} src={media} />
      </Duotone>
    )}
    {!duotone && <HeroImage altText={altText} src={media} />}
  </HeroMediaComponent>
);

declare type HeroImageProps = {
  altText: string;
  src: {
    mediaItemUrl: string;
  };
};

const HeroImage = ({ altText, src }: HeroImageProps) => (
  <div className="hero__media">
    <img src={src.mediaItemUrl} alt={altText} />
  </div>
);

export default Hero;
