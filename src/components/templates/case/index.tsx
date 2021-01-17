import React from 'react';
import { useMemo } from 'react';
import { InView } from 'react-intersection-observer';

import { Devices } from './case.styles';

import CaseBreak from './partials/break';
import CaseGallery from './partials/gallery';
import CaseRow from './partials/row';
import CaseYouTube from './partials/youtube';

import { ComponentParser } from 'wjhm';

import { Intro } from 'wjhm';
import { Related } from 'wjhm';
import { Testimonials } from 'wjhm';

import { CaseStudy } from 'wjhmtypes';
import { MediaItem } from 'wjhmtypes';

type CaseProps = CaseStudy;

const CaseTemplate = (props: CaseProps) => {
  const fields = props?.CaseStudyFields;

  const blocks = props?.blocks;
  const hasBlocks: boolean = blocks?.length > 0;

  const oldBlocks = fields?.blocks;
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
      <Intro
        content={content}
        heading={heading}
        subheading={subheading}
        illustration={illustration}
        maxWidth={maxWidth}
      />
      <Previews devices={devices} devicePreviews={devicePreviews} siteUrl={siteUrl} subheading={subheading} />
      {hasBlocks && <ComponentParser content={blocks} />}
      {oldBlocks && (
        <React.Fragment>
          <CaseRow data={oldBlocks[0]?.fields} />
          <CaseGallery images={galleryOne} />
          <CaseRow data={oldBlocks[1]?.fields} />
          <CaseGallery images={galleryTwo} />
          <CaseRow data={oldBlocks[2]?.fields} />
          <CaseGallery images={galleryThree} />
          <CaseRow data={oldBlocks[3]?.fields} />
          <CaseBreak image={galleryFour} />
          <CaseRow data={oldBlocks[4]?.fields} />
          <CaseGallery images={galleryFive} />
          <CaseRow data={oldBlocks[5]?.fields} />
          <CaseGallery images={gallerySix} small={true} />
          <CaseRow data={oldBlocks[6]?.fields} />
        </React.Fragment>
      )}
      {/* @ts-ignore */}
      <Testimonials testimonials={processedTestimonials} />
      <Related data={related} title="Continue Viewing My Case Studies" />
    </React.Fragment>
  );
};

declare type PreviewsProps = {
  devices: any;
  devicePreviews: boolean;
  siteUrl: any;
  subheading: any;
};

const Previews: React.FC<PreviewsProps> = (props: PreviewsProps) => {
  const devices = props?.devices;
  const devicePreviews = props?.devicePreviews;
  const siteUrl = props?.siteUrl;
  const subheading = props?.subheading;

  if (!devicePreviews) return null;
  if (!devices) return null;

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref }) => (
        <Devices className={inView ? `devices devices--show` : `devices`} ref={ref}>
          <a href={siteUrl} className="devices__cta button" rel="noopener noreferrer" target="_blank">
            View The {subheading} Website
          </a>
          <a className="devices__videos" href={siteUrl} rel="noopener noreferrer" target="_blank">
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
};

export default CaseTemplate;
