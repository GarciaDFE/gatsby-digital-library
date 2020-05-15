import React from "react"
import styled from "styled-components"

const InputField = styled.input`
   display: block;
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   font-weight: normal;
   color: ${props => props.theme.color.secondyDark};
   background-color: transparent;
   border: 0;
   border-bottom: 1px solid rgba(0,0,0,0.2);
   outline: none;
   margin: 0 0 25px;
   padding: 0;
   &:focus, &:active {
      background-color: white;
   }
   &::placeholder {
      color: rgba(0,0,0,0.5);
   }
`

const Input = ({ type, name, value, onChange, placeholder }) => (
   <InputField 
      type={type}
      name={name}
      value={value}
      onChange={onChange} 
      placeholder={placeholder}
   />
)

export default Input