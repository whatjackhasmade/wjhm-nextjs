import Link from 'next/link';
import { useRouter } from 'next/router';
import { createRelative, isInternal } from 'wjhm';
import { ROUTES } from 'wjhm';

declare type DynamicLinkProps = {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  to?: string;
};

const DynamicLink = (props: DynamicLinkProps) => {
  const { as, children, className, href, target, to } = props;
  const goto = href ? href : to ? to : `#`;
  const url = createRelative(goto);

  const { asPath, pathname } = useRouter();

  let isActive = null;
  const isNext = props.as && goto;

  if (isNext) {
    const relativeAs = createRelative(as);
    const comparison = asPath + `/`;
    const toggleActive = comparison.includes(relativeAs);

    if (toggleActive) isActive = `page`;

    const isHardcoded = Object.values(ROUTES).some(val => val === relativeAs);
    const isStory = relativeAs.includes(`stories/`);
    const isWork = relativeAs.includes(`work/`);

    let href = `/[uri]`;
    if (isStory) href = `/stories/[slug]`;
    if (isWork) href = `/work/[slug]`;

    return (
      <Link href={isHardcoded ? relativeAs : href}>
        {/* tslint:disable-next-line */}
        <a aria-current={isActive} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  if (isInternal(url)) {
    const toggleActive = pathname === url;
    if (toggleActive) isActive = `page`;

    return (
      <Link href={url}>
        {/* tslint:disable-next-line */}
        <a aria-current={isActive} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a className={className} href={as ? as : url} target={target}>
      {children}
    </a>
  );
};

export default DynamicLink;
