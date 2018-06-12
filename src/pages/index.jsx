import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import CTA from '../components/CTA'
import FeatureSection from '../components/FeatureSection'
import TestimonialSection from '../components/TestimonialSection'

const IndexPage = () => (
  <Layout>
    <Banner />
    <CTA />
    <FeatureSection />
    <TestimonialSection />
  </Layout>
)

export default IndexPage
