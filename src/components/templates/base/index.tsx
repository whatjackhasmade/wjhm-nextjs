import * as React from 'react';

import { htmlDecode } from 'wjhm';

import { SEO } from 'wjhm';

import { Contact } from 'wjhm';
import { Footer } from 'wjhm';
import { Header } from 'wjhm';

import { Case } from 'wjhm';
import { Page } from 'wjhm';
import { PostTemplate } from 'wjhm';
import { Series } from 'wjhm';

import type { Seo as SEOTypes } from 'wjhmtypes';

declare type typeName = {
  postType?: string;
};

declare type BaseProps = {
  children?: any;
  cta?: boolean;
  seo?: SEOTypes;
} & typeName;

const Base = (props: BaseProps) => {
  const { children, ...childless } = props;
  const { cta = true, seo } = childless;
  const includeContact: boolean = cta !== false;
  const hasChildren: boolean = Boolean(children);

  return (
    <React.Fragment>
      {seo && <SEO {...seo} />}
      <div className="wrapper">
        <Header />
        <main>{hasChildren && children}</main>
        <InnerContent {...props} />
        {includeContact && <Contact />}
        <Footer />
      </div>
    </React.Fragment>
  );
};

const InnerContent: React.FC<any> = (props: any) => {
  const { postType } = props;
  let innerContents = null;

  switch (postType?.toLowerCase()) {
    case `casestudy`:
      innerContents = <Case {...props} />;
      break;
    case `page`:
      innerContents = <Page {...props} />;
      break;
    case `post`:
      innerContents = <PostTemplate {...props} />;
      break;
    case `series`:
      innerContents = <Series {...props} />;
      break;
  }

  // Set a H1 on every page that one isn't included in the content
  const content: string = props?.content;
  const hasHeadingOne: boolean = content?.includes(`<h1>`);

  let decodedTitle = ``;
  const seo: SEOTypes = props?.seo;
  if (Boolean(seo?.title)) decodedTitle = htmlDecode(seo.title);

  return (
    <main>
      {!hasHeadingOne && <h1 className="hidden">{decodedTitle}</h1>}
      {innerContents}
    </main>
  );
};

export default Base;
