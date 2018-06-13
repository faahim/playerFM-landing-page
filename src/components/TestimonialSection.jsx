import React, { Component } from 'react'
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
]

class TestimonialSection extends Component {
  constructor() {
    super()

    this.state = {
      activeItem: testimonialsData.length - 1,
    }

    this.nextCard = this.nextCard.bind(this)
    this.previousCard = this.previousCard.bind(this)
  }

  nextCard() {
    this.setState(prevState => ({
      activeItem: !(prevState.activeItem - 1 < 0)
        ? prevState.activeItem - 1
        : 0,
    }))
  }

  previousCard() {
    this.setState(prevState => ({
      activeItem: !(prevState.activeItem + 1 > testimonialsData.length - 1)
        ? prevState.activeItem + 1
        : testimonialsData.length - 1,
    }))
  }

  render() {
    return (
      <section id={styles.testimonials}>
        <div
          style={{
            transform: `translateX(${(testimonialsData.length - 1) *
              0}px) translateY(${(testimonialsData.length - 1) * 20}px)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <Testimonials
              message={testimonial.message}
              vendor={testimonial.vendor}
              itemNumber={index}
              activeItem={this.state.activeItem}
            />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <button type="button" onClick={this.previousCard}>
            ◀
          </button>
          <button type="button" onClick={this.nextCard}>
            ▶
          </button>
        </div>
      </section>
    )
  }
}

export default TestimonialSection
