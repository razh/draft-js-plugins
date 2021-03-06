import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import styles from './styles.css';
import Code from '../../shared/Code';
import SimpleHashtagEditor from './SimpleHashtagEditor';
import CustomHashtagEditor from './CustomHashtagEditor';
import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleHashtagEditor';
import customExampleCode from '!!../../../loaders/prism-loader?language=javascript!./CustomHashtagEditor';
import customExampleStylesCode from '!!../../../loaders/prism-loader?language=css!./CustomHashtagEditor/styles.css';
import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={ 2 }>Hashtag</Heading>
        </Container>
        <AlternateContainer>
          <Heading level={ 2 }>Getting Started</Heading>
          <Code code="npm install draft-js-hashtag-plugin --save" />
          <Code code={ gettingStarted } name="gettingStarted.js" />
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Configuration Parameters</Heading>
          <div className={ styles.param }>
            <span className={ styles.paramName }>theme</span>
            <span>Map of CSS classes to style the plugin its has following values.</span>
            <div className={ styles.subParams}>
              <div className={ styles.subParam}><span className={ styles.subParamName }>hashtag:</span> CSS class to be applied to hashtag text</div>
            </div>
          </div>
        </Container>
        <Container>
          <Heading level={ 2 }>Simple Example</Heading>
          <SimpleHashtagEditor />
          <Code code={ simpleExampleCode } name="SimpleHashtagEditor.js" />
        </Container>
        <Container>
          <Heading level={ 2 }>Themed Hashtag Example</Heading>
          <CustomHashtagEditor />
          <Code code={ customExampleCode } name="CustomHashtagEditor.js" />
          <Code code={ customExampleStylesCode } name="styles.css" />
        </Container>
        <SocialBar />
      </div>

    );
  }
}
