import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aquascore: []
    }
  }

  componentDidMount() {
    fetch("https://aquagenuity.com/GetWaterScore", {
      body: "{\"auth\":{\"username\":\"yiYxPZv9dxMB\",\"password\":\"I8ho8rqeYitP\"},\"zipcode\":\"99759\"}",
      headers: {
        "Content-Type": "application/json"
      },
  method: "POST"
})
    .then(response => response.json())
    .then(json => this.setState({ aquascore: json }))
  }

  render() {
    const { aquascore } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Blog posts</h1>
          <h1 class="display-4">{aquascore["waterscore"]}</h1>
        </div>
        {aquascore.map((post) => (
          <div className="card" key={post["waterscore"]["Score Sequence"]}>
            <div className="card-header">
              #{post["waterscore"]["Score Sequence"]} {post["contaminantDetails"]}
            </div>
            <div className="card-body">
              <p className="card-text">{post.waterscore}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;