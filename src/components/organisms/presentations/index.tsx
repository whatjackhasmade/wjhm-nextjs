/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import Image from 'next/image';

import PresentationsComponent from './presentation.styles';
import settings from './settings.json';

import { callGetAllPresentatitons } from 'wjhm';
import { parseHTML } from 'wjhm';

import { Error } from 'wjhm';

import { Intro } from 'wjhm';

import { AcfPresentationsBlock_Presentationsfields as Props } from 'wjhmtypes';
import { Event } from 'wjhmtypes';

const Presentations: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const { data, error, isLoading: loading } = useQuery(`callGetAllPresentatitons`, callGetAllPresentatitons);

  const presentations: Event[] = data?.events?.nodes;
  const hasPresentations: boolean = presentations?.length > 0;

  if (!hasPresentations) return null;

  return (
    <PresentationsComponent>
      <Intro heading="Event Presentations" marginReduced={true} subheading="Touring the south coast">
        <div>{parseHTML(content)}</div>
        {error && <Error error={error} />}
        {loading && <p>Loading events...</p>}
      </Intro>
      <Slider {...settings}>
        {presentations.map(event => {
          const title = event?.title;
          const venue = event?.PostTypeEventFields?.venue;

          const key: string = `${title}-${venue}`;

          return <Presentation {...event} key={key} />;
        })}
      </Slider>
    </PresentationsComponent>
  );
};

const Presentation = (props: Event) => {
  const featuredImage = props?.featuredImage?.node;
  const PostTypeEventFields = props?.PostTypeEventFields;
  const title = props?.title;

  const venue = PostTypeEventFields?.venue;

  return (
    <div className="presentations__event">
      <Image
        alt={title}
        className="presentations__event__thumbnail"
        src={featuredImage.mediaItemUrl}
        height={1280}
        width={1920}
      />
      <div className="presentations__event__meta">
        <h5 className="subheading">{venue}</h5>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Presentations;
