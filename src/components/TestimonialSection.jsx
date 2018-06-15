import React from 'react'
import Testimonials from './Testimonials'
import lifeHacker from '../assets/testimonial-sources/lifehacker.png'
import tested from '../assets/testimonial-sources/tested.png'
import gigaom from '../assets/testimonial-sources/gigaom.png'
import androidCentral from '../assets/testimonial-sources/android-central.png'
import theGuardian from '../assets/testimonial-sources/guardian.png'
import tomsGuide from '../assets/testimonial-sources/toms-guide.png'
import styles from './TestimonialSection.module.scss'

const testimonialsData = [
  {
    message:
      'Right from the start, I found the experience of using Player FM enjoyable. I’m actually rather surprised this app is free.',
    vendor: tested,
  },
  {
    message:
      'Player FM allows users to aggregate their podcast subscriptions online and play them on any device, right within the browser – no additional software required.',
    vendor: gigaom,
  },
  {
    message:
      'The app aims to be a way not just to play podcasts from a range of sources, but to find new ones that you might like.',
    vendor: theGuardian,
  },
  {
    message:
      'Player FM keeps getting better, with new additions such as video support, more audio enhancements, discovery features and more language localization.',
    vendor: tomsGuide,
  },
  {
    message:
      "Fnding new podcast can be tricky. That's where Player FM comes in: The app guides you to smart podcasts based on category, channel, or topics.",
    vendor: lifeHacker,
  },
  {
    message:
      'You tell it the kind of things you like — Android, tech, news, sports, whatever — and it serves up a heaping helping of content.',
    vendor: androidCentral,
  },
]

const TestimonialSection = () => (
  <section id={styles.testimonials}>
    <Testimonials testimonials={testimonialsData} />
  </section>
)

export default TestimonialSection
