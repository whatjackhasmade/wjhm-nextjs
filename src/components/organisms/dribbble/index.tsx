import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useKeenSlider } from 'keen-slider/react';

import { parseHTML } from 'wjhm';

import DribbbleComponent from './dribbble.styles';

import { callGetAllDribbble } from 'wjhm';

// Icons
import { Dribbble as IconDribbble } from '../../atoms/icons/brands';

// Atoms
import { SmartImage } from 'wjhm';
import { Skeleton } from 'wjhm';

// Molecules
import { Error } from 'wjhm';

// Organisms
import { Intro } from 'wjhm';

import { AcfDribbbleBlock_Dribbblefields as Fields } from 'wjhmtypes';

declare type ShotImage = {
  hidpi?: string;
  normal?: string;
  one_x?: string;
  teaser?: string;
  two_x?: string;
};

declare type ShotProps = {
  animated?: boolean;
  attachments?: any[];
  description?: string;
  height?: number;
  html_url?: string;
  id?: number;
  images?: ShotImage;
  low_profile?: boolean;
  projects?: any[];
  published_at?: string;
  tags?: string[];
  title?: string;
  updated_at?: string;
  video?: any;
  width?: number;
};

const Dribbble = (props: Fields) => {
  const { content } = props;

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    centered: false,
    controls: false,
    dragSpeed: 1,
    duration: 1000,
    loop: true,
    resetSlide: true,
    rtl: false,
    rubberband: true,
    slidesPerView: 1,
    spacing: 24,
    vertical: false,
    breakpoints: {
      '(min-width: 500px)': {
        slidesPerView: 3,
      },
      '(min-width: 1000px)': {
        slidesPerView: 4,
      },
      '(min-width: 1200px)': {
        slidesPerView: 6,
      },
      '(min-width: 1440px)': {
        slidesPerView: 8,
      },
    },
  });

  const { data, error, isLoading: loading } = useQuery(`callGetAllDribbble`, callGetAllDribbble);
  const shots: ShotProps[] = data;
  const hasShots: boolean = data?.length > 0;
  const doubledShots = hasShots ? [...shots, ...shots] : [];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (slider) slider?.next();
    }, 5000);

    return () => clearInterval(intervalId); // This is important
  }, [slider]);

  return (
    <DribbbleComponent>
      <Intro heading="Interface Designs" subheading="My Dribbble Shots" marginReduced>
        {parseHTML(content)}
      </Intro>
      {loading && <Skeleton height="3.5" width="16" />}
      {error && <Error error={error} />}
      {hasShots && (
        <div ref={ref} className="keen-slider">
          {doubledShots.map(shot => (
            <Shot key={String(shot.id)} {...shot} />
          ))}
        </div>
      )}
    </DribbbleComponent>
  );
};

const Shot = (props: ShotProps) => {
  const { html_url: htmlURL, images, title } = props;
  const normal = images?.normal;
  const teaser = images?.teaser;

  const [mouseOver, setMouseOver] = useState<boolean>(false);

  // Set the mouseOver to true on mouse over
  const handleHover = () => setMouseOver(true);

  let classList: string = `keen-slider__slide dribble__shot`;
  if (mouseOver) classList += ` dribbble__shot--animate`;

  return (
    <div
      className={classList}
      onAnimationEnd={() => setMouseOver(false)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a className="dribbble__shot__thumbnail" href={htmlURL} rel="noopener noreferrer" target="_blank">
        <IconDribbble className="dribbble__shot__logo" />
        <SmartImage
          alt={title}
          className="presentations__event__thumbnail"
          placeholderSrc={teaser}
          src={normal}
          height={1440}
          width={1920}
        />
      </a>
      <div className="dribbble__shot__meta">
        <a href={htmlURL} rel="noopener noreferrer" target="_blank">
          <h3>{title}</h3>
        </a>
      </div>
    </div>
  );
};

export default Dribbble;
