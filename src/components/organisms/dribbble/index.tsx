import React, { useState } from 'react';
import Slider from 'react-slick';
import { parseHTML } from 'wjhm';

import DribbbleComponent from './dribbble.styles';
import settings from './settings.json';

import { Dribbble as IconDribbble } from '../../atoms/icons/brands';

import { Intro } from 'wjhm';

declare type ShotProps = {
  id: string;
  html_url: string;
  images: {
    two_x: string;
  };
  title: string;
};

type DribbbleProps = {
  content: string;
  shots: {
    node: ShotProps;
  }[];
};

const Dribbble = (props: DribbbleProps) => {
  const { content, shots } = props;
  const hasShots = shots?.length > 0;

  return (
    <DribbbleComponent>
      <Intro heading={`Interface Designs`} subheading={`My Dribbble Shots`} marginReduced>
        {parseHTML(content)}
      </Intro>
      {hasShots && (
        <Slider {...settings}>
          {shots.map(shot => (
            <Shot key={shot.node.id} {...shot.node} />
          ))}
        </Slider>
      )}
    </DribbbleComponent>
  );
};

const Shot = ({ html_url: htmlURL, images, title }: ShotProps) => {
  const twoX = images?.two_x;

  const [mouseOver, setMouseOver] = useState(false);

  const handleHover = e => {
    setMouseOver(!mouseOver);
  };

  return (
    <div
      className={mouseOver ? `dribbble__shot dribbble__shot--animate` : `dribbble__shot`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a className="dribbble__shot__thumbnail" href={htmlURL} rel="noopener noreferrer" target="_blank">
        <IconDribbble className="dribbble__shot__logo" />
        <img alt={title} className="presentations__event__thumbnail" src={twoX} />
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
