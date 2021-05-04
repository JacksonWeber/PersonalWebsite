import React from "react"

import ideStyles from "../styles/layout/ide-hero.module.css"

class IDEHero extends React.Component {

  render() {
    return (
      <div className={ ideStyles.window }>
        <div className={ ideStyles.topBar }>
          <div className={ ideStyles.buttonGroup }>
            <div className={ ideStyles.closeButton }/>
            <div className={ ideStyles.minimizeButton }/>
            <div className={ ideStyles.fullscreenButton }/>
          </div>
          <div className={ideStyles.windowName}> ~/Dev/HelloWorld/main.c </div>
        </div>
        <div className={ ideStyles.windowContent }>
          <div>
            <span style={{ color: '#61AEEF' }}>#include</span>
            <span style={{ color: '#98C379' }}>{' <stdio.h>'}</span>
          </div>
          <br/>
          <div>
            <span style={{ color: '#C176D8' }}>{'int '}</span>
            <span style={{ color: '#61AEEF' }}>{'main'}</span>
            <span style={{ color: '#86909C' }}>{'() {'}</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <span style={{ color: '#61AEEF' }}>{ 'printf' }</span>
            <span style={{ color: '#86909C' }}>{ '(' }</span>
            <span style={{ color: '#98C379' }}>{ '"Hello, World!"' }</span>
            <span style={{ color: '#86909C' }}>{ ');' }</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <span style={{ color: '#61AEEF' }}>{ 'printf' }</span>
            <span style={{ color: '#86909C' }}>{ '(' }</span>
            <span style={{ color: '#98C379' }}>{ '"I\'m a full-stack developer passionate about web technologies and UI/UX"' }</span>
            <span style={{ color: '#86909C' }}>{ ');' }</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <span style={{ color: '#61AEEF' }}>{ 'printf' }</span>
            <span style={{ color: '#86909C' }}>{ '(' }</span>
            <span style={{ color: '#98C379' }}>{ '"but I also love low-level programming and systems"' }</span>
            <span style={{ color: '#86909C' }}>{ ');' }</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <span style={{ color: '#61AEEF' }}>{ 'printf' }</span>
            <span style={{ color: '#86909C' }}>{ '(' }</span>
            <span style={{ color: '#98C379' }}>{ '"and have experience with ERP backend development and e-commerce"' }</span>
            <span style={{ color: '#86909C' }}>{ ');' }</span>
          </div>
          <div style={{ 'margin-left': '1.5rem' }}>
            <span style={{ color: '#C176D8' }}>{ 'return ' }</span>
            <span style={{ color: '#C59262' }}>{ '0' }</span>
            <span style={{ color: '#86909C' }}>{ ';' }</span>
          </div>
          <div>
            <span style={{ color: '#86909C' }}>{ '}' }</span>
          </div>
        </div>
      </div>
    );
  }
}

export default IDEHero