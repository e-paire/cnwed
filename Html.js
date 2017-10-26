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
        <style>
          {`
          * {
            box-sizing: border-box;
          }
          body {
            padding: 10px;
            margin: 0;
            font-weight: 400;
            font-family: ${"Nixie One"};
            color: rgb(79, 79, 79);
          }
          `}
        </style>
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
