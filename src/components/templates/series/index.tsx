import * as React from 'react';
import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import he from 'he';

// API
import { callGetSeriesPostsPaginated } from 'wjhm';

// Particles
import { autoParagraph } from 'wjhm';
import { parseHTML } from 'wjhm';

// Atoms
import { Button } from 'wjhm';
import { HR } from 'wjhm';
import { SmartImage } from 'wjhm';
import { Skeleton } from 'wjhm';

// Local Parts
import SeriesPost from './partials/post';
import { SeriesIntro } from './series.styles';
import { SeriesWrapper } from './series.styles';

// Type Defintions
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
              <SmartImage {...seriesImage} height={307.383} width={519.567} />
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

declare type SeriesPostsProps = {
  slug: string;
};

const SeriesPosts: React.FC<SeriesPostsProps> = ({ slug }: SeriesPostsProps) => {
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

  const { fetchNextPage, hasNextPage, isIdle, isLoading: loading } = postsQuery;

  const data = postsQuery?.data?.pages;
  const batchesLength: number = data?.length;
  const hasBatches: boolean = batchesLength > 0;

  const posts = hasBatches && [].concat.apply([], data.map(flattenBatch));
  const hasPosts: boolean = posts?.length > 0;
  const showSkeletons: boolean = loading && !hasBatches;

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
      {showSkeletons && <Skeletons />}
      {posts.map(post => (
        <SeriesPost key={post.id} {...post} />
      ))}
    </section>
  );
};

const Skeletons: React.FC = () => {
  return (
    <React.Fragment>
      {[...Array(9)].map((_, i) => {
        const key: string = `series-post-${String(i * Math.random() * 46656)}`;
        return <Skeleton height="1080" width="1920" key={key} />;
      })}
    </React.Fragment>
  );
};

export default SeriesTemplate;
