import * as React from 'react';

import { generateID } from './helpers';
import { isEmptyObject } from './helpers';
import { parseHTML } from './parseHTML';

import Code from '../atoms/code';
import Heading from '../atoms/heading';

import Bookmark from '../molecules/bookmark';
import YouTube from '../molecules/embed/youtube';

import Columns from '../organisms/columns';
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

declare type Props = { blocks: Block[]; innerBlocks?: Block[] };

const ComponentParser = (props: Props) => {
  const componentLookup = (component, index: number, isCol: boolean = false) => {
    const { name, originalContent } = component;
    const Component = components[name];

    const key = `component-${generateID()}`;
    if (isCol) component.attributes = { ...component.attributes, autoplay: false };

    if (!Component && originalContent) return <React.Fragment key={key}>{parseHTML(originalContent)}</React.Fragment>;

    component = convertACFProps(component);

    return (
      <Component index={index} key={key} {...component} {...component.attributes} {...component.data} data={null} />
    );
  };

  const ColumnHandler = (props: { innerBlocks: Block[] }) => {
    const allBlocks = props?.innerBlocks;
    const validBlocks = allBlocks && allBlocks.filter(b => b?.innerBlocks);
    const hasBlocks = validBlocks?.length > 0;
    if (!hasBlocks) return null;

    return (
      <Columns>
        {allBlocks.map((b, i) => {
          const key = `component-${generateID()}`;
          const hasInner = b?.innerBlocks?.length > 0;
          if (!hasInner) return <div className="column" key={key} />;
          return (
            <div className="column" key={key}>
              {b.innerBlocks.map(inner => componentLookup(inner, i, true))}
            </div>
          );
        })}
      </Columns>
    );
  };

  const components = {
    'core/columns': ColumnHandler,
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

  const { blocks, innerBlocks } = props;
  const noBlocks = !blocks && !innerBlocks;
  if (noBlocks) return null;

  let mapOver = innerBlocks;
  if (blocks) mapOver = blocks;

  const validComponents = mapOver.filter(c => !c || !isEmptyObject(c) || c.name !== null);
  const hasValidComponents = validComponents?.length > 0;
  if (!hasValidComponents) return null;

  const pageComponents = validComponents.map((c, index) => componentLookup(c, index));
  if (!pageComponents) return null;

  return pageComponents;
};

export default ComponentParser;
