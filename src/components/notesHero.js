import React from "react"

import Container from "./container"
import heroStyles from "../styles/layout/notes-hero.module.css"
import Teaser from "./teaser"

const NotesHero = ({ data }) => (
  <div className={ heroStyles.hero }>
    <Container>
      <div className={ heroStyles.header } >
        <h3>
          Featured Note
        </h3>
        <div className={ heroStyles.cardWrapper }>
          <Teaser node={ data }/>
        </div>
      </div>
    </Container>
  </div>
)

export default NotesHero