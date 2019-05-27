import React, { Component, Fragment } from "react";
import Loading from "./components/loading";

import "./index.css";

class App extends Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;

    return (
      <Fragment>
        <div>Teste!</div>
        <button>Teste</button>
        <Loading loading={loading} />
      </Fragment>
    );
  }
}

export default App;
