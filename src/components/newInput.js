import React, { Component } from "react";
import classnames from "classnames";

export default class newInput extends Component {
  state = {
    meat: "",
    protein: "",
    calories: "",
    carbohydrates: "",
    fat: "",
    errors: {}
  };
  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  inputArray(fnc, array) {
    this.setState({ errors: {} });
    if (
      this.state.meat !== "" &&
      this.state.protein !== "" &&
      this.state.carbohydrates !== "" &&
      this.state.calories !== "" &&
      this.state.fat !== ""
    ) {
      const newState = [
        ...array,
        [
          this.state.meat,
          this.state.protein,
          this.state.calories,
          this.state.carbohydrates,
          this.state.fat
        ]
      ];
      fnc(newState);
      this.setState({
        meat: "",
        protein: "",
        calories: "",
        carbohydrates: "",
        fat: ""
      });
    } else {
      if (this.state.meat === "") {
        this.setState(prevState => ({
          errors: { ...prevState.errors, meat: "Cannot be empty" }
        }));
      }
      if (this.state.protein === "") {
        this.setState(prevState => ({
          errors: { ...prevState.errors, protein: "Cannot be empty" }
        }));
      }
      if (this.state.calories === "") {
        this.setState(prevState => ({
          errors: { ...prevState.errors, calories: "Cannot be empty" }
        }));
      }
      if (this.state.carbohydrates === "") {
        this.setState(prevState => ({
          errors: { ...prevState.errors, carbohydrates: "Cannot be empty" }
        }));
      }
      if (this.state.fat === "") {
        this.setState(prevState => ({
          errors: { ...prevState.errors, fat: "Cannot be empty" }
        }));
      }
    }
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <div className="w-100 m-0 row">
            <input
              type="text"
              name="meat"
              placeholder="Meat"
              className={classnames(
                "text-center form-control mx-3 d-inline col",
                {
                  "is-invalid": this.state.errors.meat
                }
              )}
              onChange={e => {
                this.inputHandler(e);
              }}
              value={this.state.meat}
            />
            <input
              type="text"
              name="protein"
              placeholder="Protein (g)"
              className={classnames(
                "text-center form-control mx-3 d-inline col",
                {
                  "is-invalid": this.state.errors.protein
                }
              )}
              onChange={e => {
                this.inputHandler(e);
              }}
              value={this.state.protein}
            />
            <input
              type="text"
              name="calories"
              placeholder="Calories (cal)"
              className={classnames(
                "text-center form-control mx-3 d-inline col",
                {
                  "is-invalid": this.state.errors.calories
                }
              )}
              onChange={e => {
                this.inputHandler(e);
              }}
              value={this.state.calories}
            />
            <input
              type="text"
              name="carbohydrates"
              placeholder="Carbohydrates (g)"
              className={classnames(
                "text-center form-control mx-3 d-inline col",
                {
                  "is-invalid": this.state.errors.carbohydrates
                }
              )}
              onChange={e => {
                this.inputHandler(e);
              }}
              value={this.state.carbohydrates}
            />
            <input
              type="text"
              name="fat"
              placeholder="Fat(g)"
              className={classnames(
                "text-center form-control d-inline mx-3 col",
                {
                  "is-invalid": this.state.errors.fat
                }
              )}
              onChange={e => {
                this.inputHandler(e);
              }}
              value={this.state.fat}
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-success mt-5"
            style={{ width: "60px" }}
            onClick={() => {
              this.inputArray(this.props.fnc, this.props.array);
            }}
          >
            add
          </button>
        </div>
      </div>
    );
  }
}
