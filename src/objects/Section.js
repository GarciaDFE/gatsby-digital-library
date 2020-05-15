import React from "react"
import styled from "styled-components";

const BlockSection = styled.section`
   width: 100%;
   padding: 20px;
`

const Section = ({ children }) => <BlockSection>{children}</BlockSection>

export default Section

