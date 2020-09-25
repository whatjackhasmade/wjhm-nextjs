import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
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

import type { Post } from 'wjhmtypes';
declare type PostTemplateProps = Post & BaseProps;

const PostTemplate = (props: PostTemplateProps) => {
  const { blocks, content, date, PostFields, slug, title } = props;
  const relatedPosts = PostFields?.relatedPosts;
  const learn = null;
  const lessons = learn?.items;

  const hasBlocks = blocks?.length > 0;
  const hasDate = date;
  const hasLessons = lessons?.length > 0;
  const hasRelated = relatedPosts?.length > 0;

  const overviewTitle = learn?.title ? learn.title : `What you will learn`;

  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push(`/${slug}`, undefined, { shallow: true });
  }, []);

  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    // Prism.highlightAll();
  }, []);

  return (
    <Base {...props}>
      <ArticleIntro>
        <nav className="article__meta">
          <Link to="/posts">Insights</Link>
          {hasDate && (
            <h4 className="article__meta__date">{moment(new Date(date)).format(`DD/MM/YYYY`)} by Jack Pritchard</h4>
          )}
        </nav>
        <h1>{decodeHTML(title)}</h1>
      </ArticleIntro>
      <Article>
        {hasLessons && <OverviewList items={lessons} title={overviewTitle} />}
        {hasBlocks && <ComponentParser content={blocks} />}
        {!hasBlocks && parseHTML(content)}
      </Article>
      {hasRelated && <Related data={relatedPosts} />}
    </Base>
  );
};

export default PostTemplate;
