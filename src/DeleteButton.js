import React from "react";

export class DeleteButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick();
    }

    render() {
        return <input className={"DeleteButton" + (!this.props.visible ? " Invisible" : "")} type="image" src="deleteButton.png" onClick={this.handleClick} />;
    }
}