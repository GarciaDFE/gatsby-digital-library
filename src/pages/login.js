import React, { useState, useContext } from "react";

import SEO from "../components/seo"
import Section from "../objects/Section"
import Container from "../objects/Container"
import { FirebaseContext } from "../components/Firebase"
import { Form, Title } from "../objects/Form"
import { Input } from "../objects/Input"
import { Button } from "../objects/Button"


const LoginPage = () => {

  const [ formValues, setFormValues ] = useState({ email:"", password:"" })
  const { firebase } = useContext(FirebaseContext)

  const handleSubmit = e => {
    e.preventDefault()
    firebase.login({ 
      email: formValues.email, 
      password: formValues.password 
    })
  }

  const handleInputChange = e => {
    e.persist()
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <>
      <SEO title="Login"/>
      <Section>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title>Login</Title>
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
            <Button type="submit">Login</Button>
          </Form>
        </Container>
      </Section>
    </>
  )

};


export default LoginPage;
