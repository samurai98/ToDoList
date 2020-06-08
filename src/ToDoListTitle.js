import React from 'react';
import DeleteItemForm from "./DeleteItemForm";


class ToDoListHeader extends React.Component {

    render = () => {
        return <h3 className="todoList-header__title">{this.props.title}
            <DeleteItemForm idList={this.props.idList} delete={this.props.delete}/>
        </h3>;
    }
}

export default ToDoListHeader;

