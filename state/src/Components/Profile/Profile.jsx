import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import imgg from "./amal.jpg";
export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Lahmar Amal",
            bio:
                "“This team had a direct impact in me obtaining a new job at Amazon Web Services. They wrote a new resume and profile (and installed it) with the latest technology keywords such as AWS, cloud, virtualization, machine learning and IoT. I will continue to recommend them to my colleagues.”",
            profession: "Embedded Systems Engineer",
            imgSrc: imgg,
            intervalId: null,
            timer: 0,
        };
    }
    componentDidMount() {
        console.log("this message is from Component Did Mount");
        this.state.intervalId = setInterval(
            () => this.setState({ timer: this.state.timer + 1 }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    render() {
        return (
            <div>
                <div>
                    <Card
                        style={{ width: "25rem", backgroundColor: "#f0e4d7" }}
                    >
                        <img
                            src={this.state.imgSrc}
                            alt="amal"
                            className="im"
                        />
                        <Card.Body>
                            <Card.Title>{this.state.fullName}</Card.Title>
                            <Card.Text>{this.state.profession}</Card.Text>
                            <Card.Text>{this.state.bio}</Card.Text>
                            <Card.Text>{this.state.timer}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}
