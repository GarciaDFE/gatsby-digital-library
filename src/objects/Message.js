import React from "React"
import styled from "styled-components"

const Content = styled.span`
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: normal;
   color: #FF0000;
   text-align: center;
   padding: 10px 20px;
`

const Message = ({ children }) => <Content>{children}</Content>

export default Message