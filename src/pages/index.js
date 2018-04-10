import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input hidden className="hidden" name="bot-field" />
      <input type="text" placeholder="name" name="name" />
      <button>Send</button>
    </form>
  </div>
)

export default IndexPage
