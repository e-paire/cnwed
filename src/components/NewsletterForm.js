import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Input from "./Input"
import Button from "./Button"

const Form = styled.form`
  display: flex;
  ${media.lessThan("medium")`
    flex-direction: column;

    ${Input} + ${Button} {
      margin-top: 20px;
    }
  `};

  ${media.greaterThan("medium")`
    ${Input} + ${Button} {
      margin-left: 20px;
    }
  `};
`

const NewsletterForm = () => (
  <div>
    <p>Subscribe to our newsletter to get news !</p>
    <Form
      action="//wedding.us16.list-manage.com/subscribe/post?u=6f2dd564da874d173e11a8fd7&id=021c451be6"
      target="_blank"
      rel="nofollow noopener noreferrer"
      method="post"
    >
      <Input type="email" name="EMAIL" placeholder="email" />
      <Button type="submit">Subscribe</Button>
    </Form>
  </div>
)

export default NewsletterForm
