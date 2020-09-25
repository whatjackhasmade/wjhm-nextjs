import React from 'react';

import { Link } from 'wjhm';

import { MenuItem } from 'wjhmtypes';

const Item = ({ label, url }: MenuItem) => <Link as={url}>{label}</Link>;

export default Item;
