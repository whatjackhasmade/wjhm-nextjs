/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';

import { decodeHTML } from 'wjhm';

import { Image } from 'wjhm';
import { Link } from 'wjhm';

import { StyledPost } from './post.styles';

import { CaseStudy } from 'wjhmtypes';
import { Post as PostDef } from 'wjhmtypes';

declare type Props = PostDef | CaseStudy;

const Post: React.FC<Props> = (props: Props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const image = props?.featuredImage?.node;
  const hasImage: boolean = Boolean(image?.mediaItemUrl);
  if (!hasImage) return null;

  const seo = props?.seo?.metaDesc;
  const title = props?.title;

  const hasSEO: boolean = Boolean(seo);
  const hasTitle: boolean = Boolean(title);

  const href: string = `${props.uri}`;

  let classList: string = `item`;
  if (inView) classList += ` item--show`;

  // @ts-ignore
  const caseStudyTitle = props?.CaseStudyFields?.intro?.title;

  let subtitle: string = ``;
  if (caseStudyTitle) subtitle = caseStudyTitle;

  return (
    <StyledPost className={classList} ref={ref}>
      <Link href={href}>
        <div className="item__media">{hasImage && <Image {...image} width={534} height={300.367} />}</div>
        {hasTitle && <h3 className="item__title">{decodeHTML(title)}</h3>}
        {subtitle && <h4 className="item__subtitle">{decodeHTML(subtitle)}</h4>}
        {hasSEO && <p className="item__description">{seo}</p>}
      </Link>
    </StyledPost>
  );
};

export { Post };
export default Post;
