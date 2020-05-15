import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TitleLink = styled(Link)`
   text-decoration: none;
`

const Title = styled.h1`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.veryBig};
   font-weight: bold;
   color: ${props => props.theme.color.secondyClear};
   margin: 0;
`

const Brand = ({ brandTitle }) => {
   return (
      <TitleLink>
         <Title>{brandTitle}</Title>
      </TitleLink>
   )
}

export default Brand