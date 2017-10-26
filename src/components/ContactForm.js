import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Input from "./Input"
import Textarea from "./Textarea"
import Button from "./Button"

const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${media.lessThan("medium")`
    width: 100%;
  `};

  ${media.greaterThan("medium")`
    width: 500px;
  `};

  ${Textarea} + ${Button}, ${Input} + ${Textarea} {
    margin-top: 20px;
  }
`

const ContactForm = () => (
  <Form
    name="contact"
    action="/thanks"
    rel="nofollow noopener noreferrer"
    method="post"
    data-netlify
  >
    <input type="hidden" name="form-name" value="contact" />
    <Input type="email" name="email" placeholder="Your email" />
    <Textarea name="message" rows="10" placeholder="Your message" />
    <Button type="submit">Send</Button>
  </Form>
)

export default ContactForm
