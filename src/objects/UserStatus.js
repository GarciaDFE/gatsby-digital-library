import React from "react"
import styled from "styled-components"

const WrapUserStatus = styled.div`
   display: flex;
   flex-direction: column;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   font-weight: normal;
   color: ${props => props.theme.color.secondyClear};
   text-align: right;
   margin: 0;
   background-color: transparent;
`

const UserStatus = ({ children }) => {
   return (
      <WrapUserStatus>
         {children}
      </WrapUserStatus>
   )
}

export default UserStatus