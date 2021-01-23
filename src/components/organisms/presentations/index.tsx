import * as React from 'react';
import { useQuery } from 'react-query';
import { useKeenSlider } from 'keen-slider/react';

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

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (slider) slider?.next();
    }, 5000);

    return () => clearInterval(intervalId); // This is important
  }, [slider]);

  return (
    <PresentationsComponent>
      <Intro heading="Event Presentations" marginReduced={true} subheading="Touring the south coast">
        <div>{parseHTML(content)}</div>
        {error && <Error error={error} />}
        {loading && <p>Loading events...</p>}
      </Intro>
      <div ref={ref} className="keen-slider">
        {hasPresentations &&
          presentations.map((event, i) => {
            return <Presentation {...event} key={`event-${event.title}-${i}`} />;
          })}
      </div>
    </PresentationsComponent>
  );
};

const Presentation = (props: Event) => {
  const featuredImage = props?.featuredImage?.node;
  const title = props?.title;

  const classList: string = `keen-slider__slide presentations__event`;

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
