import React, {Component, Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransition>
          <h1>hello world</h1>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default App;
