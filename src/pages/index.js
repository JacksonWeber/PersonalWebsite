import React from "react"

import ContainerlessLayout from "../components/layoutContainerless"
import SEO from "../components/seo"
import Hero from "../components/homepageHero"

const IndexPage = () => (
  <ContainerlessLayout>
    <SEO title="Home" />
    <Hero/>
  </ContainerlessLayout>
)

export default IndexPage
