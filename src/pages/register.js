import React, { useState, useContext } from "react"

import SEO from "../components/seo"
import Section from "../objects/Section"
import Container from "../objects/Container"
import { FirebaseContext } from "../components/Firebase"
import Form from "../objects/Form"
import Input from "../objects/Input"
import Button from "../objects/Button"
import Message from "../objects/Message"

const RegisterPage = () => {

   const [formValues, setFormValues] = useState({
      email: "",
      password: "",
      confirmPassword: ""
   })
   const { firebase } = useContext(FirebaseContext)
   const [ errorMessage, setErrorMessage ] = useState("")

   const handleInputChange = e => {
      e.persist()
      setErrorMessage("")
      setFormValues(currentValues => ({
        ...currentValues,
        [e.target.name]: e.target.value
      }))
    }  

   const handleSubmit = e => {
      e.preventDefault()
      if (formValues.password === formValues.confirmPassword) {
         firebase.register({
            email: formValues.email,
            password: formValues.password
         }).catch(error => {
            setErrorMessage(error.message)
         })
      } else {
         setErrorMessage("Password and Confirm Password fields must match")
      }
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
                     value={formValues.email}
                     name="email"
                     onChange={handleInputChange} 
                     placeholder="email" 
                     type="email"
                  />
                  <Input 
                     value={formValues.password}
                     name="password"
                     onChange={handleInputChange}
                     placeholder="password" 
                     type="password"
                     minLenght={6} 
                  />
                  <Input 
                     value={formValues.confirmPassword}
                     name="confirmPassword"
                     onChange={handleInputChange}
                     placeholder="confirm password" 
                     type="password"
                     minLenght={6}
                  />
                  {!!errorMessage &&
                     <Message>{errorMessage}</Message>
                  }
                  <Button type="submit">Register</Button>
               </Form>
            </Container>
         </Section>
      </>
   )
}

export default RegisterPage