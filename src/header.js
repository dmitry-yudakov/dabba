import React from "react";
import "./header.css";
import Logo from "./media/logo.png";

import { Button, Status } from "./components/library.js";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wall">
                    <img src={Logo} className="wall__logo" alt="logo" />
                    <h2 className="wall__name">
                        {this.props.data.name + " " + this.props.data.address}
                    </h2>
                    <div className="wall__info">
                        <div></div>
                        <p>{this.props.data.contactPhone}</p>
                        <p>{this.props.data.kitchenType}</p>
                        <p>{this.props.data.email}</p>
                    </div>
                </div>
                <div className="line">
                    <p className="line__time">
                        Время доставки: Пн - Вс с {this.props.data.openTime} до{" "}
                        {this.props.data.closeTime}
                    </p>

                    <Status
                        trueMessage={"Вы в зоне доставки"}
                        falseMessage={"Вы вне зоны доставки"}
                        current={false}
                    />
                    <Button
                        elementStyle={"blue"}
                        address={"wall__share"}
                        handleFunction={() =>
                            console.log("You press share button")
                        }
                        addClasses={"line__button"}
                    >
                        Поделиться
                    </Button>
                </div>
            </div>
        );
    }
}
