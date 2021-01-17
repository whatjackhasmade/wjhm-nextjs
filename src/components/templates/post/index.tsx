import * as React from 'react';
import dayjs from 'dayjs';

import { decodeHTML } from 'wjhm';
import { enabledBlocks } from 'wjhm';
import { parseHTML } from 'wjhm';
import { ComponentParser } from 'wjhm';

import { Article, ArticleIntro } from './post.styles';

import { Link } from 'wjhm';

import { OverviewList } from 'wjhm';

import { Related } from 'wjhm';

declare type PostTemplateProps = any;

const PostTemplate = (props: PostTemplateProps) => {
  const { blocks: initialBlocks, content, date, PostFields, title } = props;
  const blocks = enabledBlocks(initialBlocks);
  const relatedPosts = PostFields?.relatedPosts;
  const learn = null;
  const lessons = learn?.items;

  const hasBlocks: boolean = blocks?.length > 0;
  const hasDate: boolean = Boolean(date);
  const hasLessons: boolean = lessons?.length > 0;
  const hasRelated: boolean = relatedPosts?.length > 0;

  let overviewTitle: string = `What you will learn`;
  if (learn?.title) overviewTitle = learn.title;

  const dateFormatted = date && dayjs(new Date(date)).format(`DD/MM/YYYY`);

  return (
    <React.Fragment>
      <ArticleIntro>
        <nav className="article__meta">
          <Link to="/posts">Insights</Link>
          {hasDate && <h4 className="article__meta__date">{dateFormatted} by Jack Pritchard</h4>}
        </nav>
        <h1>{decodeHTML(title)}</h1>
      </ArticleIntro>
      <Article>
        {hasLessons && <OverviewList items={lessons} title={overviewTitle} />}
        {hasBlocks && <ComponentParser blocks={blocks} />}
        {!hasBlocks && parseHTML(content)}
      </Article>
      {hasRelated && <Related data={relatedPosts} />}
    </React.Fragment>
  );
};

export default PostTemplate;
