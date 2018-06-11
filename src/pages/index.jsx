import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import CTA from '../components/CTA';
import FeatureSection from '../components/FeatureSection';

const IndexPage = () => (
  <Layout>
    <Banner />
    <CTA />
    <FeatureSection />
  </Layout>
);

export default IndexPage;
