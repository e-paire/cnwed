import React from "react"
import PropTypes from "prop-types"
import TransitiveNumber from "react-transitive-number"
import styled from "styled-components"
import media from "styled-media-query"

const zerofill = num => (num < 10 && num >= 0 ? `0${num}` : num)

const Wrapper = styled.div`
  position: relative;
  ${media.lessThan("medium")`
  width: 50px;
  height: 50px;
  `} ${media.between("medium", "large")`
  width: 100px;
  height: 100px;
  `} ${media.greaterThan("large")`
  width: 150px;
  height: 150px;
  `};
`

const Svg = styled.svg`
  ${media.lessThan("medium")`
width: 50px;
height: 50px;
`} ${media.between("medium", "large")`
width: 100px;
height: 100px;
`} ${media.greaterThan("large")`
width: 150px;
height: 150px;
`};
`

const Text = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  line-height: normal;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
`

const Amount = styled.span`
  ${media.lessThan("medium")`
font-size: 1rem;
`} ${media.between("medium", "large")`
font-size: 2rem;
`} ${media.greaterThan("large")`
font-size: 3.75rem;
`};
`

const Unit = styled.span`
  ${media.lessThan("medium")`
font-size: 0.4rem;
`} ${media.between("medium", "large")`
font-size: 0.5rem;
`} ${media.greaterThan("large")`
font-size: 0.75rem;
`};
`

const Circle = ({amount, max, radius, strokeColor, strokeWidth, unit}) => {
  const size = (radius + strokeWidth) * 2
  const length = Math.ceil(2 * radius * Math.PI)
  const remainingLength =
    length - Math.ceil(2 * radius * Math.PI) * (amount / max)
  return (
    <Wrapper>
      <Svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
        <circle
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          stroke="rgba(79, 79, 79, 0.1)"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          stroke={strokeColor}
          strokeDasharray={length}
          strokeDashoffset={remainingLength}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </Svg>
      <Text>
        <Amount>
          <TransitiveNumber>{zerofill(amount)}</TransitiveNumber>
        </Amount>
        <Unit>{unit}</Unit>
      </Text>
    </Wrapper>
  )
}

Circle.propTypes = {
  amount: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  radius: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  unit: PropTypes.string.isRequired,
}

Circle.defaultProps = {
  radius: 72,
  strokeColor: "rgb(229, 188, 83)",
  strokeWidth: 2,
}

export default Circle
