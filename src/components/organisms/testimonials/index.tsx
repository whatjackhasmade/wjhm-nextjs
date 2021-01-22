import { useKeenSlider } from 'keen-slider/react';

import { AngleRight } from '../../atoms/icons/solid';

import TestimonialsComponent from './testimonials.styles';

import { SmartImage } from 'wjhm';

import type { AcfTestimonialsBlock_Testimonialsfields as Props } from 'wjhmtypes';
import type { AcfTestimonialsBlock_Testimonialsfields_Testimonials as SingleItem } from 'wjhmtypes';

const Testimonials: React.FC<Props> = (props: Props) => {
  const { testimonials } = props;

  const hasTestimonials: boolean = testimonials?.length > 0;
  const hasNavigation: boolean = testimonials?.length > 1;

  const sliderSettings = {
    centered: false,
    controls: false,
    dragSpeed: 1,
    duration: 1000,
    loop: true,
    resetSlide: true,
    rtl: false,
    rubberband: false,
    slidesPerView: 1,
    spacing: 0,
    vertical: false,
  };

  const [refSliderImages, sliderImages] = useKeenSlider<HTMLDivElement>(sliderSettings);
  const [refSliderTestimonials, sliderTestimonials] = useKeenSlider<HTMLDivElement>(sliderSettings);

  const nextTestimonial = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    if (sliderImages) sliderImages?.next();
    if (sliderTestimonials) sliderTestimonials?.next();
  };

  if (!hasTestimonials) return null;

  return (
    <TestimonialsComponent>
      <div className="testimonial__media">
        <div ref={refSliderImages} className="keen-slider">
          {testimonials.map(t => (
            <TestimonialImage {...t} key={`${t?.author}-image`} />
          ))}
        </div>
      </div>
      {hasNavigation && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <AngleRight />
        </button>
      )}
      <div className="testimonials">
        <div ref={refSliderTestimonials} className="keen-slider">
          {testimonials.map(t => (
            <TestimonialInfo {...t} key={`${t?.author}-content`} />
          ))}
        </div>
      </div>
    </TestimonialsComponent>
  );
};

const TestimonialImage: React.FC<SingleItem> = (props: SingleItem) => {
  const { author, media } = props;

  return <SmartImage {...media} alt={author} className="keen-slider__slide" height={406} width={723} threshold={200} />;
};

const TestimonialInfo: React.FC<SingleItem> = (props: SingleItem) => {
  const { author, logo, role, testimonial } = props;

  let alt: string = author + ` logo`;
  if (logo?.altText) alt = logo.altText;

  let src: string = ``;
  if (logo?.mediaItemUrl) src = logo.mediaItemUrl;

  const hasImage: boolean = src !== ``;

  return (
    <div className="keen-slider__slide testimonial">
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
