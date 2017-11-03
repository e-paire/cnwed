import React from "react"
import PropTypes from "prop-types"

import Circle from "./Circle"

import styled from "styled-components"

const Circles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * + * {
    margin-left: 10px;
  }
`

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))

    this.setState({days, hours, minutes, seconds})
  }

  render() {
    return (
      <Circles>
        <Circle max={365} amount={this.state.days} unit="days" />
        <Circle max={24} amount={this.state.hours} unit="hours" />
        <Circle max={60} amount={this.state.minutes} unit="minutes" />
        <Circle max={60} amount={this.state.seconds} unit="seconds" />
      </Circles>
    )
  }
}

Counter.propTypes = {
  deadline: PropTypes.instanceOf(Date).isRequired,
}

export default Counter
