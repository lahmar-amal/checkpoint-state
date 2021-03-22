import "./App.css";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile/Profile";

class App extends Component {
    constructor() {
        super();
        this.state = {
            msg: "hello",
            show: false,
        };
        this.handleClick = () => {
            this.setState({ show: !this.state.show });
        };
    }
    render() {
        return (
            <div className="App">
                <Button variant="dark" onClick={this.handleClick}>
                    Show Profile
                </Button>
                {this.state.show ? (
                    <div className="card">
                        <Profile />
                    </div>
                ) : (
                    <h1>Click On the button to show the Profile</h1>
                )}
            </div>
        );
    }
}

export default App;
