import React from "react"

import SEO from "../components/seo"
import Section from "../objects/Section"
import Container from "../objects/Container"
import Form from "../objects/Form"
import Input from "../objects/Input"
import Button from "../objects/Button"

const RegisterPage = () => {

   const handleSubmit = e => {
      e.preventDefault()
      // firebase.login({ 
      //   email: formValues.email, 
      //   password: formValues.password 
      // })
   }
  
   return (
      <>
         <SEO title="Register"/>
         <Section>
            <Container>
               <Form 
                  title="Register"
                  onSubmit={handleSubmit}>
                  <Input
                     // value={formValues.email}
                     name="email"
                     // onChange={handleInputChange} 
                     placeholder="email" 
                     type="email"
                     required 
                  />
                  <Input 
                     // value={formValues.password}
                     name="password"
                     // onChange={handleInputChange}
                     placeholder="password" 
                     type="password"
                     required
                     minLenght={3} 
                  />
                  <Input 
                     // value={formValues.password}
                     name="password"
                     // onChange={handleInputChange}
                     placeholder="confirm password" 
                     type="password"
                     required
                     minLenght={3}
                  />
                  <Button type="submit">Register</Button>
               </Form>
            </Container>
         </Section>
      </>
   )
}

export default RegisterPage