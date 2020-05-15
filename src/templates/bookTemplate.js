import React from "react"
import { graphql } from 'gatsby'

import Section from "../objects/Section"
import Container from "../objects/Container"
import BookItem from "../components/BookItem"

const BookTemplate = (props) => {
   return (
      <Section>
         <Container>
            <BookItem 
               title={props.data.book.title}
               author={props.data.book.author.name}
               cover={props.data.book.localImage.childImageSharp.fixed}
               summary={props.data.book.summary}
               linkpage={null}
            />
         </Container>
      </Section>
   )
}

export const query = graphql`
   query BookQuery($bookId: String!) {
      book(id: {eq: $bookId}) {
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
`

export default BookTemplate