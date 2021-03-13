/* eslint-disable react/react-in-jsx-scope */

// Particles
import { parseHTML } from 'wjhm';
import { theme } from 'wjhm';

// Local Partials
import Duotone from './duotone';
import HeroComponent from './hero.styles';
import HeroMediaComponent from './media.styles';

// Type definitions
import type { MediaItem } from 'wjhmtypes';
import type { AcfHeroBlock_Herofields as HeroProps } from 'wjhmtypes';

declare type Props = HeroProps & {
  align?: string;
  children?: any;
  height?: number;
  maxWidth?: string;
};

interface CSSProperties extends React.CSSProperties {
  background?: string;
  height?: string;
}

const Hero: React.FC<Props> = (props: Props) => {
  const { align = `left`, backgroundColour, children, content } = props;
  const { duotone = false, height = 500, maxWidth, media, overlay = true } = props;

  const background = backgroundColour ? backgroundColour : theme.primary;
  const contentsMargin = align === `center` ? `0 auto` : `0 auto 0 0`;
  const contentsMaxWidth = maxWidth || `686px`;

  const style = {
    '--background': background,
    '--contents-margin': contentsMargin,
    '--contents-max-width': contentsMaxWidth,
    '--min-height': `${String(height)}px`,
  } as CSSProperties;

  if (!content) {
    return (
      <HeroComponent style={style}>
        <div className="hero__wrapper">
          <div className="hero__contents">{children}</div>
        </div>
      </HeroComponent>
    );
  }

  return (
    <HeroComponent style={style}>
      <div className="hero__wrapper">
        {content && <div className="hero__contents">{parseHTML(content)}</div>}
        {!content && <div className="hero__contents">{children}</div>}
        {media && <HeroMedia backgroundColour={backgroundColour} duotone={duotone} media={media} overlay={overlay} />}
      </div>
    </HeroComponent>
  );
};

const HeroMedia: React.FC<Props> = (props: Props) => {
  const { backgroundColour, duotone, media, overlay } = props;

  return (
    <HeroMediaComponent background={backgroundColour} overlay={overlay}>
      {duotone && (
        <Duotone className="hero__media">
          <HeroImage {...media} />
        </Duotone>
      )}
      {!duotone && <HeroImage {...media} />}
    </HeroMediaComponent>
  );
};

const HeroImage = (props: MediaItem) => {
  const { altText, mediaItemUrl } = props;

  return (
    <div className="hero__media">
      <img src={mediaItemUrl} alt={altText} />
    </div>
  );
};

export default Hero;
