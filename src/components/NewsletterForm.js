import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

const Form = styled.form`
  display: flex;
  ${media.lessThan("medium")`
flex-direction: column;
`};
`
const Input = styled.input`
  border: 2px solid #fff;
  padding: 20px;
  border: 1px solid #e5bc53;
  outline: none;
  flex: 1;
`
const Button = styled.button`
  background: #e5bc53;
  border: none;
  color: #fff;
  padding: 20px;
  cursor: pointer;
`
const NewsletterForm = () => (
  <Form
    action="//wedding.us16.list-manage.com/subscribe/post?u=6f2dd564da874d173e11a8fd7&id=021c451be6"
    target="_blank"
    rel="nofollow noopener noreferrer"
    method="post"
  >
    <Input type="email" name="EMAIL" placeholder="email" />
    <Button type="submit">Subscribe</Button>
  </Form>
)

export default NewsletterForm
