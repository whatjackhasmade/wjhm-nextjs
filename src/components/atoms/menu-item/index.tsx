import { Link } from 'wjhm';

import { MenuItem } from 'wjhmtypes';

const Item = (props: MenuItem) => {
  const { label, url } = props;
  if (!url) return null;

  let href: string = url;

  const isHomepage: boolean = url?.includes(`homepage`);
  if (isHomepage) href = `/`;

  return <Link href={href}>{label}</Link>;
};

export default Item;
