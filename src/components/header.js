import { Link } from "gatsby"
import React from "react"
import { mdiMenu, mdiClose } from "@mdi/js"
import Icon from "@mdi/react"

import Container from "./container"
import headerStyles from "../styles/layout/header.module.css"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false,
      icon: mdiMenu
    }
  }

  // Should toggle between showing hamburger-menu icon and the full list.
  toggleView(event) {
    if (this.state.shown === false) {
      this.setState({
        shown: true,
        icon: mdiClose
      })
    }
    else {
      this.setState({
        shown: false,
        icon: mdiMenu
      })
    }
  }

  render() {
    return (
    <header className={ headerStyles.navBar }>
      <Container>
        <div className={ headerStyles.branding }>
          <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink } to="/"> Jackson
            Weber </Link>
          <div className={ headerStyles.spacer }/>
          <Icon className={ headerStyles.menuIcon } onClick={ this.toggleView.bind(this) } size={ "1.5rem" } path={ this.state.icon }/>
        </div>

        <div className={ headerStyles.collapsibleMenu } style={ this.state.shown ? { "max-height": "500px" } : { "max-height": 0 } }>
          <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink }
                to={ "/notes/" }> Notes </Link>
          <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink }
                to={ "/projects/" }> Projects </Link>
          <Link className={ headerStyles.navLink } activeClassName={ headerStyles.activeNavLink }
                to={ "/contact/" }> Contact </Link>
        </div>
      </Container>
    </header>
    );
  }
}

export default Header
