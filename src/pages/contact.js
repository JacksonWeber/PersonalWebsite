import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "../styles/layout/contact.module.css"
import ideStyles from "../styles/layout/ide-hero.module.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>

    <form name="contact" method="POST" action={ "/submission" } data-netlify="true">
      <input type={"hidden"} name={ "form-name" } value={"contact"}/>
      <div className={ ideStyles.window + " " + contactStyles.window }>
        <div className={ ideStyles.topBar }>
          <div className={ ideStyles.buttonGroup }>
            <div className={ ideStyles.closeButton }/>
            <div className={ ideStyles.minimizeButton }/>
            <div className={ ideStyles.fullscreenButton }/>
          </div>
          <div className={ ideStyles.windowName }> ~/Dev/ContactMe/main.c </div>
        </div>
        <div className={ ideStyles.windowContent }>
          <div>
            <span style={{ color: '#61AEEF' }}>#include</span>
            <span style={{ color: '#98C379' }}>{' <stdio.h>'}</span>
          </div>
          <br/>
          <div>
            <span style={{ color: '#C176D8' }}>{ 'int ' }</span>
            <span style={{ color: '#61AEEF' }}>{ 'main' }</span>
            <span style={{ color: '#86909C' }}>{ '() {' }</span>
          </div>
          <div style={{'margin-left': '1.5rem'}}>
            <span style={{ color: '#C176D8' }}>{ 'char' }</span>
            <span style={{ color: '#61AEEF' }}>{ '*' }</span>
            <span style={{ color: '#86909C' }}>{' name '}</span>
            <span style={{ color: '#61AEEF' }}>{ '\u00A0\u00A0 = ' }</span>
            <span className={ contactStyles.quoteStyle }>{ '"' } </span>
            <input required placeholder={"Name"} className={ contactStyles.name } name="name" />
            <span className={ contactStyles.quoteStyle }>{ '"' }</span>
          </div>
          <div style={{'margin-left': '1.5rem'}}>
            <span style={{ color: '#C176D8' }}>{ 'char' }</span>
            <span style={{ color: '#61AEEF' }}>{ '*' }</span>
            <span style={{ color: '#86909C' }}>{ ' email ' }</span>
            <span style={{ color: '#61AEEF' }}>{ '\u00A0 = ' }</span>
            <span className={ contactStyles.quoteStyle }>{ '"' } </span>
            <input required placeholder={"Email"} className={ contactStyles.email } type="email" name="email" />
            <span className={ contactStyles.quoteStyle }>{ '"' }</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <span style={{ color: '#C176D8' }}>{ 'char' }</span>
            <span style={{ color: '#61AEEF' }}>{ '*' }</span>
            <span style={{ color: '#86909C' }}>{ ' message ' }</span>
            <span style={{ color: '#61AEEF' }}>{ '= ' }</span>
            <span className={ contactStyles.quoteStyle }>{ '"' } </span>
            <input required placeholder={"Message"} className={ contactStyles.email } name="message" />
            <span className={ contactStyles.quoteStyle }>{ '"' }</span>
          </div>
          <div>
            <span style={{ color: '#282C34' }}>.</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <button className={ contactStyles.buttonStyle } type="submit">
              <span style={{ color: '#282C34' }}>
              { 'send(name, email, message);' }
              </span>
            </button>
          </div>
          <div>
            <span style={{ color: '#86909C'}}>{'}' }</span>
          </div>
        </div>
      </div>
    </form>
  </Layout>
)

export default Contact