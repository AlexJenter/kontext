import React from 'react'

const logPipe = a => {
  console.log(a);
  return a;
}

const Section = ({ frontmatter, html }) => (
  <div>
    <h2>{frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: html }}/>
  </div>
)

export default ({ data }) => {
  const sections = data.allMarkdownRemark.edges
  .map(e => e.node)
  .map(logPipe)

  return (
    <div>
      {sections.map(s => <Section {...s} />)}
    </div>
  )
}

export const indexQuery = graphql`
query IndexQuery {
  allMarkdownRemark (
    filter:{ frontmatter: {front: {ne: 0}}}
    sort : { fields: [frontmatter___front], order: ASC }
  ) {
    edges {
      node {
        id
        frontmatter {
          title,
        }
        html
      }
    }
  }
}
`;