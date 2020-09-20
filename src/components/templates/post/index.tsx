import * as React from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import Prism from 'prismjs';

import { decodeHTML } from '../../particles/helpers';
import { parseHTML } from 'wjhm';
import ComponentParser from '../../particles/ComponentParser';

import { Article, ArticleIntro } from './post.styles';

import { Link } from 'wjhm';

import { OverviewList } from 'wjhm';

import { Related } from 'wjhm';

import { Base } from 'wjhm';

type PostProps = {
  pageContext: {
    acf: {
      learn?: {
        items: [
          {
            id?: string;
            value: string;
          },
        ];
        title?: string;
      };
      relatedPosts?: [];
    };
    blocks: [];
    content: string;
    date: string;
    title: string;
  };
};

const PostTemplate = ({
  pageContext,
  pageContext: {
    acf: { learn, relatedPosts },
    blocks,
    content,
    date,
    title,
  },
}: PostProps) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll();
  }, []);

  const lessons = learn.items;

  return (
    <Base context={pageContext}>
      <ArticleIntro>
        <nav className="article__meta">
          <Link to="/posts">Insights</Link>
          <h4 className="article__meta__date">{moment(new Date(date)).format(`DD/MM/YYYY`)} by Jack Pritchard</h4>
        </nav>
        <h1>{decodeHTML(title)}</h1>
      </ArticleIntro>
      {blocks.length > 0 ? (
        <Article>
          {lessons && lessons.length && (
            <OverviewList items={lessons} title={learn.title ? learn.title : `What you will learn`} />
          )}
          <ComponentParser content={blocks} />
        </Article>
      ) : (
        <Article>
          {lessons && lessons.length && (
            <OverviewList items={lessons} title={learn.title ? learn.title : `What you will learn`} />
          )}
          {parseHTML(content)}
        </Article>
      )}
      {relatedPosts && relatedPosts.length > 0 && <Related data={relatedPosts} />}
    </Base>
  );
};

export default PostTemplate;
