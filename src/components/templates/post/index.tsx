import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs'

import { decodeHTML } from '../../particles/helpers';
import { parseHTML } from 'wjhm';
import ComponentParser from '../../particles/ComponentParser';

import { Article, ArticleIntro } from './post.styles';

import { Link } from 'wjhm';

import { OverviewList } from 'wjhm';

import { Related } from 'wjhm';

import type { Node } from 'wjhmtypes';
declare type PostTemplateProps = any;

const PostTemplate = (props: PostTemplateProps) => {
  const { blocks, content, date, PostFields, slug, title } = props;
  const relatedPosts = PostFields?.relatedPosts;
  const learn = null;
  const lessons = learn?.items;

  const hasBlocks: boolean = blocks?.length > 0;
  const hasDate: boolean = Boolean(date);
  const hasLessons: boolean = lessons?.length > 0;
  const hasRelated: boolean = relatedPosts?.length > 0;

  let overviewTitle: string = `What you will learn`;
  if (learn?.title) overviewTitle = learn.title;

  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push(`/${slug}`, undefined, { shallow: true });
  }, [router, slug]);

  const dateFormatted = date && dayjs(new Date(date)).format(`DD/MM/YYYY`)

  return (
    <React.Fragment>
      <ArticleIntro>
        <nav className="article__meta">
          <Link to="/posts">Insights</Link>
          {hasDate && (
            <h4 className="article__meta__date">{dateFormatted} by Jack Pritchard</h4>
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
    </React.Fragment>
  );
};

export default PostTemplate;
