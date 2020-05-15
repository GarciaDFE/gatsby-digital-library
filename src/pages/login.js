import React, { useState, useContext } from "react";

import SEO from "../components/seo"
import Section from "../objects/Section"
import Container from "../objects/Container"
import { FirebaseContext } from "../components/Firebase"
import Form from "../objects/Form"
import Input from "../objects/Input"
import Button from "../objects/Button"
import Message from "../objects/Message"


const LoginPage = () => {

  const [ formValues, setFormValues ] = useState({ email:"", password:"" })
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
    firebase.login({ 
      email: formValues.email, 
      password: formValues.password 
    }).catch(error => {
      console.log(error)
      setErrorMessage(error.message)
    })
  }

  return (
    <>
      <SEO title="Login"/>
      <Section>
        <Container>
          <Form 
            title="Login"
            onSubmit={handleSubmit}>
            <Input
              value={formValues.email}
              name="email"
              onChange={handleInputChange} 
              placeholder="email" 
              type="email" />
            <Input 
              value={formValues.password}
              name="password"
              onChange={handleInputChange}
              placeholder="password" 
              type="password" />
            {!!errorMessage &&
              <Message>{errorMessage}</Message>
            }
            <Button type="submit">Login</Button>
          </Form>
        </Container>
      </Section>
    </>
  )

};


export default LoginPage;
