import React from "react"
import styled from "styled-components";
import media from "../styles/breakPoints"

const Block = styled.div`
   width: 100%;
   max-width: 900px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   align-items: center;

   ${media.lessThan("xl")`
      padding: 0 20px;
  `}
`

const Container = ({ children, className }) => <Block className={className}>{children}</Block>

export default Container