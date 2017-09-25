import React from "react"
import PropTypes from "prop-types"

const Html = ({App, render}) => {
  const {Main, State, Script, Style} = render(<App />)
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Nixie+One"
          rel="stylesheet"
        />
        <Style />
      </head>
      <body>
        <Main />
        <State />
        <Script />
      </body>
    </html>
  )
}

Html.propTypes = {
  App: PropTypes.element.isRequired,
  render: PropTypes.func.isRequired,
}

export default Html
