import React from "react"
import styled from "styled-components"

const WrapForm = styled.form`
   width: 100%;
   max-width: 500px;
   margin: 0 auto;
   padding: 30px;
   display: block;
   text-align: center;
   background-color: aliceblue;
`

const Title = styled.h2`
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   font-weight: bold;
   color: ${props => props.theme.color.firstDark};
   text-align: center;
   margin-bottom: 50px;
`

const Form = ({ onSubmit, title, children }) => (
   <WrapForm onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
   </WrapForm>
)

export default Form