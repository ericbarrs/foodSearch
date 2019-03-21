import React, { Component } from "react";
import Table from "./components/Table";
import "./App.css";

class App extends Component {
  state = {
    query: ""
  };
  queryHandler(e) {
    this.setState({ query: e.target.value });
  }
  render() {
    return (
      <div className="App text-white">
        <img className="img" src={require("./img/img.jpg")} alt="food" />
        <div className="overlay" />
        <div className="main" />
        <div className="container pt-5">
          <div className="w-100 mb-3 m-0 row">
            <input
              type="text"
              placeholder="Search for anything example: chicken breast"
              className="text-center form-control mt-5 d-inline col"
              onChange={e => {
                this.queryHandler(e);
              }}
            />
          </div>
        </div>
        <Table query={this.state.query} />
      </div>
    );
  }
}

export default App;
