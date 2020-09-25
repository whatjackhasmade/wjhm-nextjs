import React from 'react';
import { InView } from 'react-intersection-observer';
import ReactBreakpoints, { Media } from 'react-breakpoints';

import { Devices } from './case.styles';

import CaseBreak from './partials/break';
import CaseGallery from './partials/gallery';
import CaseRow from './partials/row';
import CaseYouTube from './partials/youtube';

import { Intro } from 'wjhm';
import { Related } from 'wjhm';
import { Testimonials } from 'wjhm';
import { Base } from 'wjhm';

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

import type { CaseStudy } from 'wjhmtypes';
type CaseProps = CaseStudy;

const CaseTemplate = (props: CaseProps) => {
  const { CaseStudyFields } = props;
  const { blocks, devices, devicePreviews, gallery, intro, related, siteUrl, testimonials } = CaseStudyFields;
  const processedTestimonials = testimonials.map(testimonial => {
    return { ...testimonial.testimonial };
  });

  const galleryOne = [];
  const galleryTwo = [];
  const galleryThree = [];
  const galleryFour = gallery[7];
  const galleryFive = [];
  const gallerySix = [];

  for (let i = 0; i < 2; i++) {
    galleryOne.push(gallery[i]);
  }

  for (let i = 2; i < 4; i++) {
    galleryTwo.push(gallery[i]);
  }

  for (let i = 4; i < 6; i++) {
    galleryThree.push(gallery[i]);
  }

  for (let i = 8; i < 10; i++) {
    galleryFive.push(gallery[i]);
  }

  for (let i = 10; i < gallery.length; i++) {
    gallerySix.push(gallery[i]);
  }

  const footerMenu = null;
  const headerMenu = null;
  const seo = null;

  const allProps = {
    ...props,
    footerMenu,
    headerMenu,
    seo,
  };

  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Base {...allProps}>
        <Intro
          content={intro.description}
          heading={intro.title}
          subheading={intro.subtitle}
          illustration={intro.illustration}
          maxWidth={`906px`}
        />
        {devicePreviews && (
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > breakpoints.lg ? (
                <InView threshold={0} triggerOnce={true}>
                  {({ inView, ref }) => (
                    <Devices className={inView ? `devices devices--show` : `devices`} ref={ref}>
                      <a href={siteUrl} rel="noopener noreferrer" target="_blank">
                        <div className="device-wrapper macbook">
                          <div
                            className="device"
                            data-color="white"
                            data-device="Macbook2015"
                            data-orientation="portrait"
                          >
                            <div className="screen">
                              <CaseYouTube url={devices.desktop} />
                            </div>
                          </div>
                        </div>
                        <div className="device-wrapper iphone">
                          <div className="device" data-device="iPhone7" data-orientation="portrait" data-color="white">
                            <div className="screen">
                              <CaseYouTube url={devices.mobile} />
                            </div>
                          </div>
                        </div>
                      </a>
                    </Devices>
                  )}
                </InView>
              ) : (
                <a href={siteUrl} className="button" rel="noopener noreferrer" target="_blank">
                  View The {intro.subtitle} Website
                </a>
              )
            }
          </Media>
        )}

        {blocks && (
          <>
            {blocks.length > 0 && <CaseRow data={blocks[0].fields} />}
            {galleryOne[0] && <CaseGallery images={galleryOne} />}
            {blocks.length > 1 && <CaseRow data={blocks[1].fields} />}
            {galleryTwo[0] && <CaseGallery images={galleryTwo} />}
            {blocks.length > 2 && <CaseRow data={blocks[2].fields} />}
            {galleryThree[0] && <CaseGallery images={galleryThree} />}
            {blocks.length > 3 && <CaseRow data={blocks[3].fields} />}
            {galleryFour && <CaseBreak image={galleryFour} />}
            {blocks.length > 4 && <CaseRow data={blocks[4].fields} />}
            {galleryFive[0] && <CaseGallery images={galleryFive} />}
            {blocks.length > 5 && <CaseRow data={blocks[5].fields} />}
            {gallerySix[0] && <CaseGallery images={gallerySix} small={true} />}
            {blocks.length > 6 && <CaseRow data={blocks[6].fields} />}
          </>
        )}
        {/* @ts-ignore */}
        {testimonials[0] && <Testimonials testimonials={processedTestimonials} />}
        {related[0] && <Related data={related} title="Continue Viewing My Case Studies" />}
      </Base>
    </ReactBreakpoints>
  );
};

export default CaseTemplate;
