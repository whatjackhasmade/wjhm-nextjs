import React from 'react';
import { useMemo } from 'react';
import { InView } from 'react-intersection-observer';
import { Media } from 'react-breakpoints';
import ReactBreakpoints from 'react-breakpoints';

import { Devices } from './case.styles';

import CaseBreak from './partials/break';
import CaseGallery from './partials/gallery';
import CaseRow from './partials/row';
import CaseYouTube from './partials/youtube';

import { Intro } from 'wjhm';
import { Related } from 'wjhm';
import { Testimonials } from 'wjhm';

import { CaseStudy } from 'wjhmtypes';
import { MediaItem } from 'wjhmtypes';

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

type CaseProps = CaseStudy;

const CaseTemplate = (props: CaseProps) => {
  const fields = props?.CaseStudyFields;

  const blocks = fields?.blocks;
  const devices = fields?.devices;
  const devicePreviews = fields?.devicePreviews;
  const gallery = fields?.gallery;
  const intro = fields?.intro;
  const related = fields?.related;
  const siteUrl = fields?.siteUrl;
  const testimonials = fields?.testimonials;

  const processedTestimonials = useMemo(() => {
    const hasTestimonials = testimonials?.length > 0;
    if (!hasTestimonials) return [];

    return testimonials.map(testimonial => {
      return { ...testimonial.testimonial };
    });
  }, [testimonials]);

  const galleryOne: MediaItem[] | any[] = [];
  const galleryTwo: MediaItem[] | any[] = [];
  const galleryThree: MediaItem[] | any[] = [];
  const galleryFour: MediaItem = gallery?.[7];
  const galleryFive: MediaItem[] | any[] = [];
  const gallerySix: MediaItem[] | any[] = [];

  const hasImages: boolean = gallery?.length > 0;
  if (hasImages) {
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
  }

  const content = intro?.description;
  const heading = intro?.title;
  const subheading = intro?.subtitle;
  const illustration = intro?.illustration;
  const maxWidth = `906px`;

  return (
    <React.Fragment>
      <ReactBreakpoints breakpoints={breakpoints}>
        <Intro
          content={content}
          heading={heading}
          subheading={subheading}
          illustration={illustration}
          maxWidth={maxWidth}
        />
        {devicePreviews && <Previews devices={devices} siteUrl={siteUrl} subheading={subheading} />}
        {blocks && (
          <React.Fragment>
            {blocks?.length > 0 && <CaseRow data={blocks[0].fields} />}
            {galleryOne?.[0] && <CaseGallery images={galleryOne} />}
            {blocks?.length > 1 && <CaseRow data={blocks[1].fields} />}
            {galleryTwo?.[0] && <CaseGallery images={galleryTwo} />}
            {blocks?.length > 2 && <CaseRow data={blocks[2].fields} />}
            {galleryThree?.[0] && <CaseGallery images={galleryThree} />}
            {blocks?.length > 3 && <CaseRow data={blocks[3].fields} />}
            {galleryFour && <CaseBreak image={galleryFour} />}
            {blocks?.length > 4 && <CaseRow data={blocks[4].fields} />}
            {galleryFive?.[0] && <CaseGallery images={galleryFive} />}
            {blocks?.length > 5 && <CaseRow data={blocks[5].fields} />}
            {gallerySix?.[0] && <CaseGallery images={gallerySix} small={true} />}
            {blocks?.length > 6 && <CaseRow data={blocks[6].fields} />}
          </React.Fragment>
        )}
        {/* @ts-ignore */}
        {testimonials?.[0] && <Testimonials testimonials={processedTestimonials} />}
        {related?.[0] && <Related data={related} title="Continue Viewing My Case Studies" />}
      </ReactBreakpoints>
    </React.Fragment>
  );
};

declare type PreviewsProps = {
  devices: any;
  siteUrl: any;
  subheading: any;
};

const Previews: React.FC<PreviewsProps> = (props: PreviewsProps) => {
  const devices = props?.devices;
  const siteUrl = props?.siteUrl;
  const subheading = props?.subheading;

  return (
    <Media>
      {({ breakpoints, currentBreakpoint }) => {
        const isLarge: boolean = breakpoints[currentBreakpoint] > breakpoints.lg;

        if (!isLarge) {
          return (
            <a href={siteUrl} className="button" rel="noopener noreferrer" target="_blank">
              View The {subheading} Website
            </a>
          );
        }

        return (
          <InView threshold={0} triggerOnce={true}>
            {({ inView, ref }) => (
              <Devices className={inView ? `devices devices--show` : `devices`} ref={ref}>
                <a href={siteUrl} rel="noopener noreferrer" target="_blank">
                  <div className="device-wrapper macbook">
                    <div className="device" data-color="white" data-device="Macbook2015" data-orientation="portrait">
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
        );
      }}
    </Media>
  );
};

export default CaseTemplate;
