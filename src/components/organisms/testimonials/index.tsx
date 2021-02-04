import * as React from 'react';

import { AngleRight } from '../../atoms/icons/solid';

import TestimonialsComponent from './testimonials.styles';

import { SmartImage } from 'wjhm';

import type { AcfTestimonialsBlock_Testimonialsfields as Props } from 'wjhmtypes';
import type { AcfTestimonialsBlock_Testimonialsfields_Testimonials as SingleItem } from 'wjhmtypes';

declare type SingleItemExtended = SingleItem & { current: number; finalIndex: number; index: number };

const Testimonials: React.FC<Props> = (props: Props) => {
  const { testimonials: initial } = props;
  const propLength = initial?.length;

  // Used to prevent only two items in the testimonials
  const shouldDuplicate = propLength === 2;
  let testimonials = initial;
  if (shouldDuplicate) testimonials = [...initial, ...initial];

  const [current, setCurrent] = React.useState<number>(0);

  const refImages = React.useRef(null);
  const refQuotes = React.useRef(null);

  const length: number = testimonials?.length;
  const finalIndex: number = length - 1;
  const hasTestimonials: boolean = length > 0;
  const hasNavigation: boolean = length > 1;

  const nextTestimonial = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();

    const isEnd: boolean = current === finalIndex;

    if (isEnd) setCurrent(0);
    if (!isEnd) setCurrent(current + 1);
  };

  if (!hasTestimonials) return null;

  return (
    <TestimonialsComponent>
      <div className="testimonial__media">
        <div ref={refImages} className="testimonials__images">
          {testimonials.map((t, i) => (
            <TestimonialImage {...t} key={`${t?.author}-image`} current={current} finalIndex={finalIndex} index={i} />
          ))}
        </div>
      </div>
      {hasNavigation && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <AngleRight />
        </button>
      )}
      <div className="testimonials">
        <div ref={refQuotes} className="testimonials__quotes">
          {testimonials.map((t, i) => (
            <TestimonialInfo {...t} key={`${t?.author}-content`} current={current} finalIndex={finalIndex} index={i} />
          ))}
        </div>
      </div>
    </TestimonialsComponent>
  );
};

const TestimonialImage: React.FC<SingleItemExtended> = (props: SingleItemExtended) => {
  const { author, current, index, media } = props;

  const prevIndex = current - 1;
  const nextIndex = current + 1;

  const isCurrent: boolean = index === current;
  const isPrevious: boolean = index === prevIndex;
  const isNext: boolean = index === nextIndex;

  let classList = `testimonial__image slide`;
  if (isCurrent) classList += ` slide--active`;
  if (isPrevious) classList += ` slide--previous`;
  if (isNext) classList += ` slide--next`;

  return <SmartImage {...media} alt={author} className={classList} height={406} width={723} threshold={200} />;
};

const TestimonialInfo: React.FC<SingleItemExtended> = (props: SingleItemExtended) => {
  const { author, current, index, logo, role, testimonial } = props;

  let alt: string = author + ` logo`;
  if (logo?.altText) alt = logo.altText;

  let src: string = ``;
  if (logo?.mediaItemUrl) src = logo.mediaItemUrl;

  const hasImage: boolean = src !== ``;

  const prevIndex = current - 1;
  const nextIndex = current + 1;

  const isCurrent: boolean = index === current;
  const isPrevious: boolean = index === prevIndex;
  const isNext: boolean = index === nextIndex;

  let classList = `testimonial slide`;
  if (isCurrent) classList += ` slide--active`;
  if (isPrevious) classList += ` slide--previous`;
  if (isNext) classList += ` slide--next`;

  return (
    <div className={classList}>
      <header className="testimonial__header">
        <div>
          <h3 className="testimonial__author">{author}</h3>
          <h4 className="testimonial__role">{role}</h4>
        </div>
        {hasImage && (
          <div className="testimonial__logo">
            <SmartImage src={src} alt={alt} />
          </div>
        )}
      </header>
      <p className="testimonial__quote">&quot;{testimonial}&quot;</p>
    </div>
  );
};

export default Testimonials;
