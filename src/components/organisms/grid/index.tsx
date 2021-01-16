import * as React from 'react';
import { useState } from 'react';

import GridComponent from './grid.styles';

import { Button } from 'wjhm';
import { Image } from 'wjhm';

declare type GridMedia = {
  altText: string;
  ext: string;
  key: string;
  mediaItemUrl: string;
  md?: string;
  title: string;
};

type GridProps = {
  filter?: boolean;
  items: {
    id: string;
    media: GridMedia;
    tags: {
      nodes: {
        slug: string;
      };
    };
    title: string;
  }[];
  type: string;
};

const Grid = (props: GridProps) => {
  const { filter, items } = props;
  const [count, updateCount] = useState<number>(100);

  if (!items) return null;

  const loadMore = () => updateCount(count + 9);

  const validItems = items.filter(Boolean);

  const rows = [];

  for (let i = 0; i < count; i++) {
    const item = validItems[i];

    const { id, media, title } = item;
    const { altText, md, mediaItemUrl } = media;
    const tags = item?.tags;
    if (!mediaItemUrl) return;

    const ext: string = mediaItemUrl.substr(mediaItemUrl.lastIndexOf(`.`) + 1);

    rows.push({
      altText,
      ext,
      filter,
      key: `grid-item-${id}`,
      md,
      mediaItemUrl,
      tag: tags?.nodes?.[0]?.slug,
      title,
    });
  }

  const hasRows: boolean = rows?.length > 0;
  if (!hasRows) return null;

  return (
    <React.Fragment>
      <GridComponent>
        {rows.map(({ altText, ext, filter, key, mediaItemUrl, md, tag, title }) => (
          <GridItem
            altText={altText}
            ext={ext}
            filter={filter}
            key={key}
            md={md}
            mediaItemUrl={mediaItemUrl}
            tag={tag}
            title={title}
          />
        ))}
      </GridComponent>
      <Button disabled={count > items.length} onClick={loadMore}>
        Load More
      </Button>
    </React.Fragment>
  );
};

declare type GridItemProps = {
  filter: string;
  tag: string;
} & GridMedia;

const GridItem = (props: GridItemProps) => {
  const { altText, ext, filter, key, mediaItemUrl, md, tag, title } = props;
  const [fullScreen, changeFullScreen] = useState<boolean>(false);
  const isActive: boolean = tag === filter;

  let classList: string = `grid__item`;
  if (fullScreen) classList += ` grid__item--fullscreen`;

  if (isActive) classList += ` grid__item--active`;
  if (!isActive) classList += ` grid__item--inactive`;

  const isImage = ext !== `mp4`;

  const toggleFullscreen = e => {
    e.preventDefault();
    changeFullScreen(!fullScreen);
  };

  return (
    <button className={classList} key={key} onClick={toggleFullscreen}>
      {!isImage && <video src={mediaItemUrl} autoPlay={true} loop={true} muted={true} />}
      {isImage && <Image alt={altText} src={md} height={1080} width={1920} />}
      <span className="grid__item__title">{title}</span>
    </button>
  );
};

export default Grid;
