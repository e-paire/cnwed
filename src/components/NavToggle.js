import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  z-index: 2;
`

const Icon = styled.div`
  position: absolute;
  top: 9px;
  left: 0px;

  &,
  &:before,
  &:after {
    width: 20px;
    height: 1px;
    background-color: #000;
    border-radius: 2px;
    transition-duration: 0.5s;
    transition-timing-function: swing;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
  }

  &:before {
    top: -8px;
    ${props => props.open && "transform: translateY(8px) rotate(45deg);"};
  }

  &:after {
    top: 8px;
    ${props => props.open && "transform: translateY(-8px) rotate(-45deg);"};
  }

  & {
    ${props => props.open && "width: 0"};
  }
`

const Text = styled.span`
  text-transform: uppercase;
  padding-left: 30px;
  line-height: 20px;
`

const NavToggle = ({open, onClick}) => (
  <Wrapper onClick={onClick}>
    <Icon open={open} />
    <Text>Menu</Text>
  </Wrapper>
)

NavToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
}

NavToggle.defaultProps = {
  open: false,
}

export default NavToggle
