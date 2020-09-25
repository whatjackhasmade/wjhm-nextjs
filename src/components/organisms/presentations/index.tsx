import React from 'react';
import Slider from 'react-slick';
import { parseHTML } from 'wjhm';

import PresentationsComponent from './presentation.styles';
import settings from './settings.json';

import { Intro } from 'wjhm';

type PresentationsProps = {
  content: string;
};

type PresentationProps = {
  date: string;
  featuredImage: {
    altText: string;
    xs: string;
    sm: string;
    md: string;
    mediaItemUrl: string;
    lg: string;
    xl: string;
    uri: string;
  };
  id: string;
  title: string;
  url: string;
  venue: string;
};

const Presentations = ({ content }: PresentationsProps) => {
  // const presentations = useQueryPresentations();
  const presentations = [];
  const hasPresentations = presentations?.length > 0;

  return (
    <PresentationsComponent>
      <Intro heading="Event Presentations" marginReduced={true} subheading="Touring the south coast">
        <div>{parseHTML(content)}</div>
      </Intro>
      <Slider {...settings}>
        {hasPresentations &&
          presentations.map(event => <Presentation {...event} key={`${event?.title}-${event?.venue}`} />)}
      </Slider>
    </PresentationsComponent>
  );
};

const Presentation = ({ featuredImage, title, venue }: PresentationProps) => (
  <div className="presentations__event">
    <img alt={title} className="presentations__event__thumbnail" src={featuredImage.sm} />
    <div className="presentations__event__meta">
      <h5 className="subheading">{venue}</h5>
      <h3>{title}</h3>
    </div>
  </div>
);

export default Presentations;
