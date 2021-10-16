import React from "react";

export class ListItemInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { txt: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChanged = this.handleTextChanged.bind(this);
    }

    handleSubmit(e) {
        this.props.addItem(this.state.txt)
        this.setState({ txt: "" });
    }

    handleTextChanged(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.txt} className="ListItemInput" onChange={this.handleTextChanged} />
                <br />
                <input type="button" value="Add Item" className="SubmitButton" onClick={this.handleSubmit} />
            </form >
        );
    }
}