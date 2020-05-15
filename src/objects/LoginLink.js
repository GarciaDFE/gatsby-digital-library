import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Linklogin = styled(Link)`
   font-size: 1.8rem; 
   color: #FFF;
   text-decoration: none;
   &:hover {
      text-decoration: underline;
   }
`

const LoginLink = ({ linkto, children }) => {
   return (
      <Linklogin to={linkto}>{children}</Linklogin>
   )
}

export default LoginLink