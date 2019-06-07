import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "../styles/layout/contact.module.css"
import buttonStyles from "../styles/layout/button.module.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>

    <form className={ contactStyles.contactBox } name="contact" method="POST" action={"/submission"} data-netlify="true">
      <input type={"hidden"} name={"form-name"} value={"contact"}/>

      <div>
        <input required placeholder={"Email"} className={ contactStyles.email } type="email" name="email" />
      </div>
      <div>
        <textarea required placeholder={"Message"} className={ contactStyles.message } name="message"/>
      </div>
      <div>
        <button className={ contactStyles.buttonStyle + " " + buttonStyles.buttonStyle } type="submit">Send</button>
      </div>
    </form>
  </Layout>
)

export default Contact