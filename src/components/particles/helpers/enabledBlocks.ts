import type { Block } from 'wjhmtypes';

export const enabledBlocks = (blocks: Block[]): Block[] => {
  const allowed: string[] = [
    `core/columns`,
    `acf/code`,
    `acf/dribbble`,
    `acf/github`,
    `acf/hero`,
    `acf/intro`,
    `acf/link`,
    `acf/presentations`,
    `acf/row`,
    `acf/testimonials`,
    `acf/work`,
    `acf/youtube`,
    `acf/youtubechannel`,
    `core/heading`,
    `core-embed/youtube`,
  ];

  const onlyEnabled: Block[] = blocks.filter(b => allowed.includes(b.name));
  return onlyEnabled;
};

export default enabledBlocks;
