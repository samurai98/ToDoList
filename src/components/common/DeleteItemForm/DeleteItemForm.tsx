import React from 'react';
import styles from './DeleteItemForm.module.css';

type OwnPropsType = {
    id: string
    delete: (taskId: string) => void
}

class DeleteItemForm extends React.Component<OwnPropsType> {

    render = () => {
        return (
            <span className={styles['todoList-deleteTaskForm']}>
                <button onClick={() => {this.props.delete(this.props.id)}}
                >X</button>
            </span>
        );
    }
}

export default DeleteItemForm;

