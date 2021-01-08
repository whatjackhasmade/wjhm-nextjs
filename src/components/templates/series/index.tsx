import * as React from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import Image from 'next/image';
import he from 'he';

import { callGetSeriesPostsPaginated } from 'wjhm';

import { autoParagraph } from 'wjhm';
import { parseHTML } from 'wjhm';

import { Button } from 'wjhm';
import { HR } from 'wjhm';

import SeriesPost from './partials/post';
import { SeriesIntro } from './series.styles';
import { SeriesWrapper } from './series.styles';

import type { Series } from 'wjhmtypes';

type Props = Series;

const SeriesTemplate: React.FC<Props> = (props: Props) => {
  const { description, name, slug, SeriesFields } = props;
  const seriesImage = SeriesFields?.seriesImage;
  // @ts-ignore
  const youtubePlaylist = SeriesFields?.youtubePlaylist;

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
        <SeriesPosts slug={slug} />
      </SeriesWrapper>
    </React.Fragment>
  );
};

const flattenBatch = entry => entry?.edges?.map(({ node }) => node);

const SeriesPosts = ({ slug }) => {
  const fetchWorks = async args => {
    const pageParam = args?.pageParam;

    let after = ``;
    if (pageParam) after = pageParam;

    return await callGetSeriesPostsPaginated({ after, slug });
  };

  const postsQuery = useInfiniteQuery(`queryPosts`, args => fetchWorks(args), {
    getNextPageParam: (lastPage, pages) => {
      const edges = lastPage?.edges;
      if (!edges) return undefined;

      const endPost = edges[edges.length - 1];
      const after = endPost?.cursor;
      return after;
    },
  });

  const { fetchNextPage, hasNextPage, isIdle } = postsQuery;

  const data = postsQuery?.data?.pages;
  const batchesLength: number = data?.length;
  const hasBatches: boolean = batchesLength > 0;

  const posts = hasBatches && [].concat.apply([], data.map(flattenBatch));
  const hasPosts: boolean = posts?.length > 0;

  useEffect(() => {
    if (!hasNextPage) return;

    const endGroup = data[data.length - 1];

    const endPost = endGroup?.edges?.[endGroup?.edges.length - 1];
    const after = endPost?.cursor;

    fetchNextPage(after);
  }, [fetchNextPage, hasNextPage, isIdle, data]);

  if (!hasPosts) return null;

  return (
    <section className="series__grid">
      {posts.map(post => (
        <SeriesPost key={post.id} {...post} />
      ))}
    </section>
  );
};

export default SeriesTemplate;
