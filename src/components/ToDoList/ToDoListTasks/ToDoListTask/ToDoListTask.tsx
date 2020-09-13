import React, {ChangeEvent} from 'react';
import '../../../../App.css';
import DeleteItemForm from '../../../common/DeleteItemForm/DeleteItemForm';
import {TaskType} from '../../../../types/entities';
import styles from './ToDoListTask.module.css';

type OwnPropsType = {
    task: TaskType
    index: number
    changeStatus: (newTask: TaskType, status: boolean) => void
    changeTitle: (newTask: TaskType, title: string, priority: number) => void
    deleteTask: (taskId: string) => void

    provided: any
    snapshot: any
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
        let priorityStyle = [this.props.task.priority, 'priorityStyle' + this.props.task.priority];
        return (
            <div className={`${isOpacity} item ${this.props.snapshot.isDragging && 'dragging'}`}
                 title={'Click to edit!'}
                 ref={this.props.provided.innerRef}
                 {...this.props.provided.draggableProps}
                 {...this.props.provided.dragHandleProps}
            >
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
                    : <div className={styles.taskInfo} onClick={this.activateEditMode}>
                        <div className={`${styles.priorityStyle} ${styles[priorityStyle[1]]}`}
                             title={`Priority: ${this.props.task.priority}`}> </div>
                        <div>
                            <input
                                type='checkbox'
                                checked={isStatus}
                                onChange={this.onIsDoneChanged}
                            />
                            <span className={styles.taskTitle}
                                  onClick={this.activateEditMode}
                                  title={`id this task: ${this.props.task.id}`}
                            >{this.props.task.title}</span>
                        </div>
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

