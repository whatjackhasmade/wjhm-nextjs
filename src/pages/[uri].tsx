import { InferGetServerSidePropsType } from 'next';

import { Base } from 'wjhm';

import { getServerPropsNode as getServerSideProps } from 'wjhm';

export { getServerSideProps };

const NodePage = (context: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <Base {...context} />;
};

export default NodePage;
