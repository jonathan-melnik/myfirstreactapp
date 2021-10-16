import React from 'react';
import { ListItem } from './ListItem';
import { ListItemInput } from './ListItemInput';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.state = { items: [] };
    }

    deleteListItem(index) {
        let newItems = this.state.items;
        newItems.splice(index, 1);
        this.setState({ items: newItems });
    }

    addItem(txt) {
        if (!txt) {
            return;
        }
        let items = this.state.items;
        items.push(txt);
        this.setState({ items: items });
    }

    render() {
        let listItems = [];
        for (let i = 0; i < this.state.items.length; i++) {
            listItems.push(<ListItem index={i} deleteListItem={this.deleteListItem} txt={this.state.items[i]} />);
        }
        return (
            < div >
                <ul className="no-bullets">
                    {listItems}
                </ul>
                <ListItemInput addItem={this.addItem} />
            </div >
        );
    }
}