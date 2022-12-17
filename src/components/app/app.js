import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John Colins",
          salary: 800,
          increase: false,
          rise: false,
          id: 1,
        },
        {
          name: "Fred Maccoy",
          salary: 1500,
          increase: false,
          rise: true,
          id: 2,
        },
        {
          name: "Alex Black",
          salary: 3000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addItem = (name, salary) => {
    this.setState(({ data }) => {
      const newArr = [
        {
          name: name,
          salary: salary,
          increase: false,
          rise: false,
          id: this.maxId++,
        },
      ];
      return {
        data: [...data, ...newArr],
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (term, data) => {
    if (term.length === 0) {
      return data;
    }
    return data.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({
      term,
    });
  };

  onFilter = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "salary":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.onFilter(this.searchEmp(term, data), filter);

    return (
      <div className="app">
        <AppInfo
          counter={data.length}
          countFilt={data.filter((item) => item.increase).length}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
