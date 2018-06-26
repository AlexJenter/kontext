import React from 'react'
import Link from 'gatsby-link'

const headerWrapperStyle = {
  marginBottom: '1.45rem',
}

const headerStyle = {
  padding: '1.4rem 1rem'
}

const linkStyle = {
  textDecoration: 'none',
}

const Header = ({ meta }) => (
  <div style={{...headerWrapperStyle}}>
    <h1 style={{...headerStyle}}>
      <Link to="/" style={{...linkStyle}}>
        {meta.title}
      </Link>
    </h1>
    <p>{meta.subtitle}</p>
  </div>
)

export default Header
