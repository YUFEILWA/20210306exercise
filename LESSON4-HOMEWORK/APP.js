import React, { PureComponent } from "react";
import Carousel from "./Carousel";

export default class App extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Carousel width={720} height={455}>
            <li>
            <a href="/#">
            <img src={require("字节.jpg")} alt="" />
            </a>
            </li>
            <li>
            <a href="/#">
            <img src={require("字节.jpg")} alt="" />
            </a>
            </li>
            <li>
            <a href="/#">
            <img src={require("字节.jpg")} alt="" />
            </a>
            </li>
            <li>
            <a href="/#">
            <img src={require("字节.jpg")} alt="" />
            </a>
            </li>
            </Carousel>
    );
    }
}