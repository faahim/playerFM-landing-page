import React from 'react'
import Testimonials from './Testimonials'

const testimonialsData = [
  {
    message: 'PlayerFM is the best thing in the wholewide world!',
    vendor: 'TechCrunch',
  },
  {
    message: "It's only for the PlayerFM that I'm still alive in the world.",
    vendor: 'The Verge',
  },
  {
    message: 'My life, My life, would suck, would suck, without PlayerFM',
    vendor: 'Lifehacker',
  },
]

const TestimonialSection = () => (
  <section id="testimonial-wrapper">
    {testimonialsData.map(testimonial => (
      <Testimonials message={testimonial.message} vendor={testimonial.vendor} />
    ))}
  </section>
)

export default TestimonialSection
