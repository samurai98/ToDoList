import React from 'react';


class ToDoListHeader extends React.Component {

    render = () => {
        return <h3 className="todoList-header__title">{this.props.title}</h3>;
    }
}

export default ToDoListHeader;

