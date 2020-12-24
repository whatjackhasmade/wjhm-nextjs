import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { createRelative } from 'wjhm';
import { isInternal } from 'wjhm';
import { ROUTES } from 'wjhm';
import { windowAvailable } from 'wjhm';

declare type DynamicLinkProps = {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  to?: string;
};

const DynamicLink = (props: DynamicLinkProps) => {
  const { as, children, className, href, onClick, target, to } = props;
  const goto = href ? href : to ? to : `#`;
  const url = createRelative(goto);

  const { asPath } = useRouter();
  const pathname: string = windowAvailable() && window?.location?.pathname;

  let isActive = null;
  const isNext = props.as && goto;

  if (isNext) {
    const relativeAs = createRelative(as);
    const comparison = asPath + `/`;
    const toggleActive = comparison.includes(relativeAs);

    if (toggleActive) isActive = `page`;

    const isHardcoded = Object.values(ROUTES).some(val => val === relativeAs);
    const href = `/[uri]`;

    return (
      <Link as={isHardcoded ? null : relativeAs} href={isHardcoded ? relativeAs : href}>
        <a aria-current={isActive} className={className} onClick={onClick}>
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
        <a aria-current={isActive} className={className} onClick={onClick}>
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
