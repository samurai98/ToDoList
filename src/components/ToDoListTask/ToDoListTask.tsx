import React, {ChangeEvent} from 'react';
import '../../App.css';
import DeleteItemForm from '../common/DeleteItemForm/DeleteItemForm';
import {TaskType} from '../../types/entities';
import styles from './ToDoListTask.module.css';

type OwnPropsType = {
    task: TaskType
    changeStatus: (newTask: TaskType, status: boolean) => void
    changeTitle: (newTask: TaskType, title: string, priority: number) => void
    deleteTask: (taskId: string) => void
}

type StateType = {
    isEditMode: boolean
    title: string
    priority: number
}

class ToDoListTask extends React.Component<OwnPropsType, StateType> {
    state = {
        isEditMode: false,
        title: this.props.task.title,
        priority: this.props.task.priority
    };

    onIsDoneChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: e.currentTarget.value});
    };

    onPriorityChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({priority: +e.currentTarget.value});
    };

    activateEditMode = () => {
        this.setState({isEditMode: true});
    };

    deActivateEditMode = () => {
        this.setState({isEditMode: false});
        this.props.changeTitle(this.props.task, this.state.title, this.state.priority);
    };

    render = () => {
        let isStatus = this.props.task.status === 2;
        let isOpacity = isStatus ? `${styles['todoList-task']} ${styles.done}` : styles['todoList-task'];
        return (
            <div className={isOpacity}>
                {this.state.isEditMode
                    ? <div className={styles.editMode}>
                        <input
                            type='checkbox'
                            checked={isStatus}
                            onChange={this.onIsDoneChanged}
                        />
                        <input onChange={this.onTitleChanged}
                               autoFocus={true}
                               value={this.state.title}
                        />
                        <span>priority: </span>
                        <input onChange={this.onPriorityChanged}
                               type='number'
                               min='1' max='5'
                               value={this.state.priority}
                        />
                        <button onClick={this.deActivateEditMode}>Save</button>
                    </div>
                    : <div>
                        <input
                            type='checkbox'
                            checked={isStatus}
                            onChange={this.onIsDoneChanged}
                        />
                        <span onClick={this.activateEditMode}
                              title={`id this task: ${this.props.task.id}`}
                        >{this.props.task.title}
                             | <b>priority: {this.props.task.priority}</b>
                        </span>

                    </div>
                }
                <div>
                    <DeleteItemForm delete={this.props.deleteTask}
                                    id={this.props.task.id}
                    />
                </div>
            </div>
        );
    }
}

export default ToDoListTask;

