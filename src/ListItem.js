import React from 'react';
import { DeleteButton } from './DeleteButton';

export class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isMouseOver: false };

        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }

    handleDeleteButtonClick() {
        this.props.deleteListItem(this.props.index);
    }

    handleMouseOver(e) {
        this.setState({ isMouseOver: true });
    }

    handleMouseOut(e) {
        this.setState({ isMouseOver: false });
    }

    render() {
        return (
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <li className="ListItem">
                    {this.props.txt} &nbsp;
                    <DeleteButton onClick={this.handleDeleteButtonClick} visible={this.state.isMouseOver} />
                </li>
            </div>
        );
    }
}