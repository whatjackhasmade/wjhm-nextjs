import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { AngleRight } from '../../atoms/icons/solid';

import TestimonialsComponent from './testimonials.styles';

import { SmartImage } from 'wjhm';

import type { AcfTestimonialsBlock_Testimonialsfields as Props } from 'wjhmtypes';
import type { AcfTestimonialsBlock_Testimonialsfields_Testimonials as SingleItem } from 'wjhmtypes';

const settings = {
  draggable: false,
  infinite: true,
  lazyLoad: false,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipe: false,
  swipeToSlide: false,
};

const Testimonials: React.FC<Props> = (props: Props) => {
  const { testimonials } = props;
  const sliderImages = useRef(null);
  const sliderTestimonials = useRef(null);

  const hasTestimonials: boolean = testimonials?.length > 0;
  const hasNavigation: boolean = testimonials?.length > 1;

  const nextTestimonial = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    if (sliderImages) sliderImages?.current?.slickNext();
    if (sliderImages) sliderTestimonials?.current?.slickNext();
  };

  if (!hasTestimonials) return null;

  return (
    <TestimonialsComponent>
      <div className="testimonial__media">
        <Carousel ref={sliderImages} {...settings}>
          {testimonials.map(t => (
            <TestimonialImage {...t} key={`${t?.author}-image`} />
          ))}
        </Carousel>
      </div>
      {hasNavigation && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <AngleRight />
        </button>
      )}
      <div className="testimonials">
        <Carousel ref={sliderTestimonials} {...settings}>
          {testimonials.map(t => (
            <TestimonialInfo {...t} key={`${t?.author}-content`} />
          ))}
        </Carousel>
      </div>
    </TestimonialsComponent>
  );
};

const TestimonialImage: React.FC<SingleItem> = (props: SingleItem) => {
  const { author, media } = props;

  return <SmartImage {...media} alt={author} height={406} width={723} />;
};

const TestimonialInfo: React.FC<SingleItem> = (props: SingleItem) => {
  const { author, logo, role, testimonial } = props;

  let alt: string = author + ` logo`;
  if (logo?.altText) alt = logo.altText;

  let src: string = ``;
  if (logo?.mediaItemUrl) src = logo.mediaItemUrl;

  const hasImage: boolean = src !== ``;

  return (
    <div className="testimonial">
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
