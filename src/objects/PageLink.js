import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinkTo = styled(Link)`
   color: #FFF;
   text-decoration: none;
   &:hover {
      text-decoration: underline;
   }
`

const PageLink = ({ linkto, children }) => {
   return (
      <LinkTo to={linkto}>{children}</LinkTo>
   )
}

export default PageLink