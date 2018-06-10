import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import WalkSVG from '../components/WalkSVG';
import Taglines from '../components/Taglines';
import CTA from '../components/CTA';

const IndexPage = () => (
  <Layout>
    <Container>
      <WalkSVG />
      <Taglines />
      <CTA />
    </Container>
  </Layout>
);

export default IndexPage;
