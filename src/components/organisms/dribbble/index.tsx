import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Slider from 'react-slick';

import { parseHTML } from 'wjhm';

import DribbbleComponent from './dribbble.styles';
import settings from './settings.json';

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

  const { data, error, isLoading: loading } = useQuery(`callGetAllDribbble`, callGetAllDribbble);

  const shots: ShotProps[] = data;
  const hasShots: boolean = data?.length > 0;

  return (
    <DribbbleComponent>
      <Intro heading="Interface Designs" subheading="My Dribbble Shots" marginReduced>
        {parseHTML(content)}
      </Intro>
      {loading && <Skeleton height="3.5" width="16" />}
      {error && <Error error={error} />}
      {hasShots && (
        <Slider {...settings}>
          {shots.map(shot => (
            <Shot key={String(shot.id)} {...shot} />
          ))}
        </Slider>
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

  let classList: string = `dribble__shot`;
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
        <Image
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
