import React, { useRef } from 'react';
import Slider from 'react-slick';

import { AngleRight } from '../../atoms/icons/solid';

import TestimonialsComponent from './testimonials.styles';

import type { AcfTestimonialsBlock_Testimonials } from 'wjhmtypes';

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

const Testimonials = (props: AcfTestimonialsBlock_Testimonials) => {
  const { testimonials } = props;
  const sliderImages = useRef(null);
  const sliderTestimonials = useRef(null);

  const hasTestimonials = testimonials?.length > 0;
  const hasNavigation = testimonials?.length > 1;

  const nextTestimonial = e => {
    e.preventDefault();
    if (sliderImages) sliderImages?.current?.slickNext();
    if (sliderImages) sliderTestimonials?.current?.slickNext();
  };

  return (
    <TestimonialsComponent>
      <div className="testimonial__media">
        <Slider ref={sliderImages} {...settings}>
          {hasTestimonials &&
            testimonials.map(({ author, media }) => <img src={media.mediaItemUrl} alt={author} key={author} />)}
        </Slider>
      </div>
      {hasNavigation && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <AngleRight />
        </button>
      )}
      <div className="testimonials">
        <Slider ref={sliderTestimonials} {...settings}>
          {hasTestimonials &&
            testimonials.map(({ author, logo, role, testimonial }) => (
              <div className="testimonial" key={`testimonial-${author}`}>
                <header className="testimonial__header">
                  <div>
                    <h3 className="testimonial__author">{author}</h3>
                    <h4 className="testimonial__role">{role}</h4>
                  </div>
                  <img className="testimonial__logo" src={logo?.sourceUrl} alt={logo?.altText} />
                </header>
                <p className="testimonial__quote">&quot;{testimonial}&quot;</p>
              </div>
            ))}
        </Slider>
      </div>
    </TestimonialsComponent>
  );
};

export default Testimonials;
