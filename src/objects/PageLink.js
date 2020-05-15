import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinkToPage = styled(Link)`
   color: #FFF;
   text-decoration: none;
   &:hover {
      text-decoration: underline;
   }
`

const PageLink = ({ topage, children }) => {
   return (
      <LinkToPage to={topage}>{children}</LinkToPage>
   )
}

export default PageLink