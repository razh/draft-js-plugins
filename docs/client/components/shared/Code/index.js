import React, { Component, PropTypes } from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import styles from './styles.css';
import 'prismjs/themes/prism.css';

export default class Code extends Component {

  static propTypes = {
    code: PropTypes.string,
  };

  state = {
    collapsed: true,
  };

  shouldComponentUpdate = shouldComponentUpdate;

  onCodeClick = () => {
    const collapsed = !this.state.collapsed;
    this.setState({
      collapsed,
    });
  };

  render() {
    const nameClassname = this.props.name ? styles.name : styles.hiddenName;
    const codeClassname = this.state.collapsed ? styles.collapsed : styles.expanded;
    return (
      <div className={ styles.root }>
        <div className={ nameClassname }>
          <span>{ this.props.name }</span>
          <span onClick={ this.onCodeClick } className={styles.indicator }>{ this.state.collapsed ? '▼' : '▲' }</span>
        </div>
        <pre className={ codeClassname }>
          <code
            dangerouslySetInnerHTML={{ __html: this.props.code }}
          />
        </pre>
      </div>
    );
  }
}
