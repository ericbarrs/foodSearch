import React, { Component } from "react";
import NewInput from "./newInput";

export default class Table extends Component {
  state = {
    columnHeaders: [
      "Meat",
      "Protein (g)",
      "Calories (cal)",
      "Carbohydrates (g)",
      "Fat (g)"
    ],
    rows: [
      ["chicken breast", "25g", "200cal", "37g", "8g"],
      ["fried chicken", "45g", "450cal", "21g", "16g"],
      ["beef stew", "20g", "250cal", "8g", "14g"]
    ],
    isTrue: true,
    sortedBy: "meat",
    order: null
  };

  AscendingHandler(header, index) {
    const arrayRows = this.state.rows;
    this.setState({
      isTrue: this.state.isTrue === true ? false : true,
      sortedBy: header
    });

    if (this.state.isTrue) {
      arrayRows.sort(sortFunction);
      function sortFunction(a, b) {
        if (a[index] === b[index]) {
          return 0;
        } else {
          return a[index] < b[index] ? -1 : 1;
        }
      }
      this.setState({ rows: arrayRows });
    } else {
      arrayRows.sort(sortFunction);
      function sortFunction(a, b) {
        if (a[index] === b[index]) {
          return 0;
        } else {
          return a[index] > b[index] ? -1 : 1;
        }
      }
      this.setState({ rows: arrayRows });
    }
  }

  addToArray = x => {
    this.setState({ rows: x });
  };

  findRow(wordEntered) {
    const array1 = this.state.rows.map(rows => {
      const array2 = rows.filter(word => {
        if (
          wordEntered === rows[0] ||
          wordEntered === rows[1] ||
          wordEntered === rows[2] ||
          wordEntered === rows[3] ||
          wordEntered === rows[4]
        ) {
          return rows;
        } else {
          return null;
        }
      });
      return array2;
    });
    return array1.map((row, index) => {
      return (
        <tr key={index}>
          <th scope="row">{row[0]}</th>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
          <td>{row[3]}</td>
          <td>{row[4]}</td>
        </tr>
      );
    });
  }

  render() {
    if (this.props.query === "") {
      return (
        <div>
          <div className="container">
            <table className="table text-align-center table-hover">
              <thead>
                <tr>
                  {this.state.columnHeaders.map((header, index) => {
                    return (
                      <th
                        className="bg-info"
                        onClick={() => this.AscendingHandler(header, index)}
                        scope="col"
                        index={index}
                        key={index}
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {this.state.rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      <td>{row[4]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <NewInput fnc={this.addToArray} array={this.state.rows} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <table className="table table-hover">
              <thead className="bg-info">
                <tr>
                  {this.state.columnHeaders.map((header, index) => {
                    return (
                      <th
                        onClick={() => this.AscendingHandler(header, index)}
                        scope="col"
                        index={index}
                        key={index}
                      >
                        {header}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>{this.findRow(this.props.query)}</tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
