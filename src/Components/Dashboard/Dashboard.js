import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("/api/house").then(res => {
      this.setState({ houses: res.data });
    });
  }

  deleteHouse(id) {
    axios.delete(`api/house/${id}`).then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  render() {
    return (
      <div>
        Dashboard
        <Link to="/wizard">
          <button>Add New House</button>
        </Link>

        {this.state.houses.map(house => {
          return (
            <House
              id={house.id}
              name={house.name}
              address={house.address}
              city={house.city}
              state={house.state}
              zipcode={house.zipcode}
              deleteHouse={this.deleteHouse}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
//