import React from 'react'
import Testimonials from './Testimonials'
import styles from './TestimonialSection.module.scss'

const testimonialsData = [
  {
    message: "Face tomorrow, Tomorrow isn't yesterday.",
    vendor: 'TechCrunch',
  },
  {
    message: "It's raining again, tell me something I don't know.",
    vendor: 'The Verge',
  },
  {
    message: 'My life, My life, would suck, would suck, without you!',
    vendor: 'Lifehacker',
  },
  {
    message: "Face tomorrow, Tomorrow isn't yesterday.",
    vendor: 'TechCrunch',
  },
  {
    message: "It's raining again, tell me something I don't know.",
    vendor: 'The Verge',
  },
  {
    message: 'My life, My life, would suck, would suck, without you!',
    vendor: 'Lifehacker',
  },
  {
    message: "Face tomorrow, Tomorrow isn't yesterday.",
    vendor: 'TechCrunch',
  },
  {
    message: "It's raining again, tell me something I don't know.",
    vendor: 'The Verge',
  },
  {
    message: 'My life, My life, would suck, would suck, without you!',
    vendor: 'Lifehacker',
  },
  {
    message: "Face tomorrow, Tomorrow isn't yesterday.",
    vendor: 'TechCrunch',
  },
  {
    message: "It's raining again, tell me something I don't know.",
    vendor: 'The Verge',
  },
  {
    message: 'My life, My life, would suck, would suck, without you!',
    vendor: 'Lifehacker',
  },
]

const TestimonialSection = () => (
  <section id={styles.testimonials}>
    <Testimonials testimonials={testimonialsData} />
  </section>
)

export default TestimonialSection
