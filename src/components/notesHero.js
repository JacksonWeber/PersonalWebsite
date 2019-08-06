import React from "react"

import Container from "./container"
import heroStyles from "../styles/layout/notes-hero.module.css"

const NotesHero = ({ data }) => (
  <div className={ heroStyles.hero }>
    <Container>
      <div className={ heroStyles.header } >
        <h3>
          Featured Note
        </h3>
      </div>
    </Container>
  </div>
)

export default NotesHero