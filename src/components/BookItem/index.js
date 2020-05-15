import React from "react"
import Img from "gatsby-image"

import { WrapItem, 
         Title, 
         Author, 
         Content, 
         BookCover, 
         BookDescription,
         Summary, 
         Linkpage } from "./styles.js"

const BookItem = ({ title, author, summary, linkpage, cover }) => {
   return (
      <WrapItem>
         <Title>{title}<Author>{author}</Author></Title>
         <Content>
            <BookCover>
               <Img fixed={cover} alt="book cover"/>
            </BookCover>
            <BookDescription>
               <Summary>{summary}</Summary>
               {linkpage 
                  ? <Linkpage to={linkpage}>Comentários sobre o livro</Linkpage>
                  : null
               }
            </BookDescription>
         </Content>
      </WrapItem>
   )
}

export default BookItem