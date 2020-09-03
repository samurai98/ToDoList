import React from 'react';

type OwnPropsType = {
    id: string
    delete: (taskId: string) => void
}

class DeleteItemForm extends React.Component<OwnPropsType> {

    render = () => {
        return (
            <span className="todoList-deleteTaskForm">
                <button onClick={() => {this.props.delete(this.props.id)}}
                >X</button>
            </span>
        );
    }
}

export default DeleteItemForm;

