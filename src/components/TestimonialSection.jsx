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
    link:
      'http://www.tested.com/tech/android/455298-google-play-app-roundup-draft/',
  },
  {
    message:
      'Player FM allows users to aggregate their podcast subscriptions online and play them on any device, right within the browser – no additional software required.',
    vendor: gigaom,
    link: 'https://gigaom.com/2012/05/17/player-fm-web-based-podcast-playback/',
  },
  {
    message:
      'The app aims to be a way not just to play podcasts from a range of sources, but to find new ones that you might like.',
    vendor: theGuardian,
    link:
      'http://www.theguardian.com/technology/appsblog/2013/may/03/best-android-apps-angry-birds-friends',
  },
  {
    message:
      'Player FM keeps getting better, with new additions such as video support, more audio enhancements, discovery features and more language localization.',
    vendor: tomsGuide,
    link:
      'http://www.tomsguide.com/us/pictures-story/555-best-podcast-apps.html',
  },
  {
    message:
      "Fnding new podcast can be tricky. That's where Player FM comes in: The app guides you to smart podcasts based on category, channel, or topics.",
    vendor: lifeHacker,
    link:
      'http://lifehacker.com/player-fm-finds-great-new-podcasts-on-almost-any-topic-493101906',
  },
  {
    message:
      'You tell it the kind of things you like — Android, tech, news, sports, whatever — and it serves up a heaping helping of content.',
    vendor: androidCentral,
    link:
      'http://www.androidcentral.com/apps-week-player-fm-allthecooks-recipes-upto-calendar-and-more',
  },
]

const TestimonialSection = () => (
  <section id={styles.testimonials}>
    <Testimonials testimonials={testimonialsData} />
  </section>
)

export default TestimonialSection
