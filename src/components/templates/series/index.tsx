import * as React from 'react';
import { useMemo } from 'react';
import he from 'he';
import Image from 'next/image';

import { autoParagraph } from 'wjhm';
import { parseHTML } from 'wjhm';

import { Button } from 'wjhm';
import { HR } from 'wjhm';

import SeriesPost from './partials/post';
import { SeriesIntro } from './series.styles';
import { SeriesWrapper } from './series.styles';

import { Series } from 'wjhmtypes';

type Props = Series;

const SeriesTemplate: React.FC<Props> = (props: Props) => {
  const { description, name, posts, SeriesFields } = props;
  const seriesImage = SeriesFields?.seriesImage;
  // @ts-ignore
  const youtubePlaylist = SeriesFields?.youtubePlaylist;

  const hasPosts: boolean = posts?.nodes?.length > 0;

  return (
    <React.Fragment>
      <SeriesWrapper>
        {SeriesFields && (
          <SeriesIntro>
            <div>
              <a href={youtubePlaylist} rel="noopener noreferrer" target="_blank">
                <h1>{he.decode(name)}</h1>
              </a>
              {parseHTML(autoParagraph(description))}
              {youtubePlaylist && (
                <Button href={youtubePlaylist} rel="noopener noreferrer" target="_blank">
                  View YouTube Playlist
                </Button>
              )}
            </div>
            <a className="intro__image" href={youtubePlaylist} rel="noopener noreferrer" target="_blank">
              <Image alt={seriesImage.altText} src={seriesImage.mediaItemUrl} height={1080} width={1920} />
            </a>
          </SeriesIntro>
        )}
        <HR />
        {hasPosts && <SeriesPosts posts={posts} />}
      </SeriesWrapper>
    </React.Fragment>
  );
};

const SeriesPosts = ({ posts }) => {
  const orderedPosts = useMemo(() => {
    return posts?.nodes?.reverse()?.map(post => <SeriesPost key={post.id} {...post} />);
  }, [posts]);

  return orderedPosts;
};

export default SeriesTemplate;
