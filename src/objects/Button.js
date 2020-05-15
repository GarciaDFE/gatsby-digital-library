import styled from "styled-components"

export const Button = styled.button`
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   font-weight: normal;
   color: ${props => props.theme.color.secondyClear};
   background-color: ${props => props.theme.color.firstDark};
   border: 0;
   border-radius: 5px;
   outline: none;
   padding: 5px 20px;
   margin-top: 30px;
   cursor: pointer;
   &:hover {
      opacity: 0.8;
   }
`