import * as React from 'react';
import { useQuery } from 'react-query';

import PresentationsComponent from './presentation.styles';

import { callGetAllPresentations } from 'wjhm';
import { parseHTML } from 'wjhm';

import { SmartImage } from 'wjhm';

import { Error } from 'wjhm';

import { Intro } from 'wjhm';

import { AcfPresentationsBlock_Presentationsfields as Props } from 'wjhmtypes';
import { Event } from 'wjhmtypes';

const Presentations: React.FC<Props> = (props: Props) => {
  const { content } = props;
  const { data, error, isLoading: loading } = useQuery(`callGetAllPresentations`, callGetAllPresentations);
  const presentations = data;
  const hasPresentations: boolean = presentations?.length > 0;

  return (
    <PresentationsComponent>
      <Intro heading="Event Presentations" marginReduced={true} subheading="Touring the south coast">
        <div>{parseHTML(content)}</div>
        {error && <Error error={error} />}
        {loading && <p>Loading events...</p>}
      </Intro>
      {hasPresentations && (
        <div className="presentations__events">
          {presentations.map((event, i) => {
            return <Presentation {...event} key={`event-${event.title}-${i}`} />;
          })}
        </div>
      )}
    </PresentationsComponent>
  );
};

const Presentation = (props: Event) => {
  const featuredImage = props?.featuredImage?.node;
  const title = props?.title;

  const classList: string = `presentations__event`;

  return (
    <div className={classList}>
      <SmartImage className="presentations__event__thumbnail" height={302} width={453} {...featuredImage} alt={title} />
      <div className="presentations__event__meta">
        <h3 className="h5">{title}</h3>
      </div>
    </div>
  );
};

export default Presentations;
