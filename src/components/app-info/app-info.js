import { Component } from "react";

import "./app-info.css";

class AppInfo extends Component {
  render() {
    const { counter, countFilt } = this.props;
    return (
      <div className="app-info">
        <h1>Учет сотрудников в компании Company</h1>
        <h2>Общее число сотрудников: {counter} </h2>
        <h2>Примею получат: {countFilt} </h2>
      </div>
    );
  }
}

export default AppInfo;
