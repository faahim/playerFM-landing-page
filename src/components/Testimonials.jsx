import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ message, vendor }) => (
  <div className="testimonial-item">
    <p>{message}</p>
    <p>-- {vendor}</p>
  </div>
)

Testimonials.propTypes = {
  message: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
}

export default Testimonials
