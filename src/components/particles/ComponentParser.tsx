import * as React from 'react';

import { isEmptyObject } from './helpers';
import { parseHTML } from './parseHTML';

import Code from '../atoms/code';
import Heading from '../atoms/heading';

import Bookmark from '../molecules/bookmark';
import YouTube from '../molecules/embed/youtube';

import Dribbble from '../organisms/dribbble';
import Github from '../organisms/github';
import Hero from '../organisms/hero';
import Intro from '../organisms/intro';
import Presentations from '../organisms/presentations';
import Row from '../organisms/row';
import Testimonials from '../organisms/testimonials';
import Work from '../organisms/work';
import YouTubeChannel from '../organisms/youtube';

import type { Block, Maybe } from 'wjhmtypes';

declare type ExtendedBlock = {
  attributes: any;
  data: any;
} & Block;

declare type ComponentParserProps = {
  content: Block[] | Maybe<ExtendedBlock>[];
};

const components = {
  'acf/code': Code,
  'acf/dribbble': Dribbble,
  'acf/github': Github,
  'acf/hero': Hero,
  'acf/intro': Intro,
  'acf/link': Bookmark,
  'acf/presentations': Presentations,
  'acf/row': Row,
  'acf/testimonials': Testimonials,
  'acf/work': Work,
  'acf/youtube': YouTube,
  'acf/youtubechannel': YouTubeChannel,
  'core/heading': Heading,
  'core-embed/youtube': YouTube,
};

const convertACFProps = component => {
  // get all object keys and iterate over them
  Object.keys(component).forEach(key => {
    if (key.includes(`Fields`)) {
      component.data = component[key];
      delete component[key];
    }
  });

  return component;
};

const ComponentParser = (props: ComponentParserProps) => {
  const { content } = props;

  if (!content) return null;
  const filteredComponents = content.filter(
    component => !component || !isEmptyObject(component) || component.name !== null,
  );

  const hasFiltered: boolean = filteredComponents?.length > 0;
  if (!hasFiltered) return null;

  const pageComponents = filteredComponents.map((component, index) => {
    const { name, originalContent } = component;
    const key: string = `${name}-${index}`;

    const Component = components[name];

    if (!Component) return parseHTML(originalContent);

    component = convertACFProps(component);

    return (
      <Component
        index={index}
        key={key}
        {...component}
        // @ts-ignore
        {...component.attributes}
        // @ts-ignore
        {...component.data}
      />
    );
  });

  if (!pageComponents) return null;

  return <React.Fragment>{pageComponents}</React.Fragment>;
};

export default ComponentParser;
