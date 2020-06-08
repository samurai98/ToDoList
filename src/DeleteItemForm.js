import React from 'react';

class DeleteItemForm extends React.Component {

    render = () => {
        return (
            <span className="todoList-deleteTaskForm">
                <button onClick={() => {this.props.delete(this.props.idList, this.props.idTask)}}
                >X</button>
            </span>
        );
    }
}

export default DeleteItemForm;

