import React from "react"
import styled from "styled-components"

const Linklogout = styled.span`
   color: #FFF;
   cursor: pointer;
   &:hover {
      text-decoration: underline;
   }
`

const LogoutLink = ({ children, onClick }) => {
   return (
      <Linklogout onClick={onClick}>{children}</Linklogout>
   )
}

export default LogoutLink