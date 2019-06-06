import React from "react"
import Img from "gatsby-image"
import Icon from "@mdi/react"
import { mdiArrowDownBold, mdiArrowUpBold } from "@mdi/js"

import Button from "./button.js"
import cardStyles from "../styles/layout/project-card.module.css"

class ProjectCard extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false,
      detailCSS: { "max-height": 0 },
      icon: mdiArrowDownBold
    }
  }

  toggleView(event) {
    // Prevent A tags collapsing the card.
    if (event.target.tagName === "A") {
      return;
    }

    if (this.state.shown === false) {
      this.setState({
        shown: true,
        detailCSS: { "max-height": "500px" },
        icon: mdiArrowUpBold
      })
    }
    else {
      this.setState({
        shown: false,
        detailCSS: { "max-height": 0 },
        icon: mdiArrowDownBold
      })
    }
  }

  render() {
    let data = this.props.data;

    return (
      <article className={ cardStyles.cardBox } onClick={ this.toggleView.bind(this) }>
        <div className={cardStyles.projectHeader}>
          <h2>
            { data.title }
          </h2>
          <div>
            <Img className={cardStyles.cardImage} fluid={ data.relationships.field_languages[0].relationships.field_image.localFile.childImageSharp.fluid }/>
          </div>
        </div>
        <div className={cardStyles.projectSubheader}>
          <div className={ cardStyles.projectSummary }>
            { data.body.summary }
          </div>
          <Icon className={ cardStyles.downArrow } path={ this.state.icon }/>
        </div>

        <div style={ this.state.detailCSS } className={ cardStyles.projectCollapsible }>
          <div className={ cardStyles.projectDescription }>
            { data.body.value }
          </div>
          <div className={ cardStyles.buttonWrapper }>
            <Button href={ data.field_link[0].uri } target={"_blank"}>{ data.field_link[0].title }</Button>
          </div>
        </div>
      </article>
    );
  }
}

export default ProjectCard
