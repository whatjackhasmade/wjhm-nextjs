import React from 'react';
import he from 'he';

import { SeriesIntro, SeriesWrapper } from './series.styles';
import SeriesPost from './partials/post';

import { autoParagraph } from 'wjhm';
import { parseHTML } from 'wjhm';

import { Button } from 'wjhm';
import { HR } from 'wjhm';
import { Base } from 'wjhm';

type SeriesProps = {
  pageContext: {
    description: string;
    name: string;
    posts: {
      nodes: any[];
    };
    SeriesFields: {
      seriesImage: {
        altText: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      youtubePlaylist?: string;
    };
  };
};

const SeriesTemplate = ({
  pageContext,
  pageContext: { description, name, posts, SeriesFields },
  pageContext: {
    SeriesFields: { seriesImage, youtubePlaylist },
  },
}: SeriesProps) => (
  <Base context={pageContext}>
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
            <img alt={seriesImage.altText} src={seriesImage.xl} />
          </a>
        </SeriesIntro>
      )}
      <HR />
      {pageContext.posts.nodes.length > 0 && (
        <section className="series__grid">
          {pageContext.posts.nodes.reverse().map(post => (
            <SeriesPost key={post.id} {...post} />
          ))}
        </section>
      )}
    </SeriesWrapper>
  </Base>
);

export default SeriesTemplate;
