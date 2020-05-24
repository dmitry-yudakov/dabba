import React from "react";
import "./--orange.css";
import "./--blue.css";

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            orange: "button--orange",
            blue: "button--blue",
            greyToggle: "button--grey",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleFunction();
    }

    render() {
        return (
            <button
                className={
                    this.styles[
                        this.props.elementStyle
                            ? this.props.elementStyle
                            : "orange"
                    ] +
                    " " +
                    this.props.addClasses
                }
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}