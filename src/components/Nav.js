import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import NavToggle from "./NavToggle"
import Link from "./Link"

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
`

const List = styled.ul`
  display: ${props => (props.open ? "flex" : "none")};
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  margin: 0;
  padding: 10px;
`

const Icon = styled.div`
  padding: 20px;
`

const ItemWrapper = styled.li`
  list-style: none;
  font-size: 20px;
  text-align: center;
`

const Item = ({children, url}) => (
  <ItemWrapper>
    <Link to={url}>{children}</Link>
  </ItemWrapper>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
}

Item.defaultProps = {
  className: null,
}

class Nav extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleClose() {
    this.setState({isOpen: false})
  }

  handleToggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const {isOpen} = this.state
    return (
      <Wrapper>
        <List open={isOpen}>
          <Item url="/" onClick={this.handleClose}>
            {"Accueil"}
          </Item>
          <Item url="/contact" onClick={this.handleClose}>
            {"Contact"}
          </Item>
          <Item url="/stay" onClick={this.handleClose}>
            {"Dormir sur place / Huisjes huren"}
          </Item>
          <Item url="/map" onClick={this.handleClose}>
            {"Comment venir / Welk vervoer"}
          </Item>
        </List>
        <Icon>
          <NavToggle open={isOpen} onClick={this.handleToggle} />
        </Icon>
      </Wrapper>
    )
  }
}

export default Nav
