import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onChangeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmith = (e) => {
    e.preventDefault();
    if (this.state.name.length > 3 && this.state.salary > 0) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: "",
      });
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onChangeValue}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            value={salary}
            onChange={this.onChangeValue}
            name="salary"
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={this.onSubmith}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
