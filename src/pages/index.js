import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import SEO from "../components/seo"
import BookItem from "../components/BookItem"
import Section from "../objects/Section"
import Container from "../objects/Container"

const IndexPage = () => {

  const data = useStaticQuery(
    graphql`
      query {
        Books: allBook {
          edges {
            node {
              id
              title
              localImage {
                childImageSharp {
                 fixed(width: 150) {
                   ...GatsbyImageSharpFixed_tracedSVG
                 }
               }
              }
              summary
              author {
                name
              }     
            }
          }
        }
      }`
  )

  return (
    <>
      <SEO title="Home"/>
      <Section>
        <Container>
          {data.Books.edges.map(edge => (
            <>
              <BookItem 
                key={edge.node.id}
                title={edge.node.title}
                author={edge.node.author.name}
                cover={edge.node.localImage.childImageSharp.fixed}
                summary={edge.node.summary}
                linkpage={`/book/${edge.node.id}`}>
              </BookItem>
            </>
          ))}
        </Container>
      </Section>
    </>
  )

};


export default IndexPage;
