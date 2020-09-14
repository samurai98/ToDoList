import React from 'react';
import '../../../App.css';
import ToDoListTask from './ToDoListTask/ToDoListTask';
import {TaskType} from '../../../types/entities';
import styles from './ToDoListTasks.module.css';
import {Draggable, DraggableProvided, DraggableStateSnapshot} from 'react-beautiful-dnd';


type OwnPropsType = {
    tasks: Array<TaskType>
    changeStatus: (newTask: TaskType, status: boolean) => void
    changeTitle: (newTask: TaskType, title: string, priority: number) => void
    deleteTask: (taskId: string) => void
}

class ToDoListTasks extends React.Component<OwnPropsType> {
    render = () => {
        let tasksElements = this.props.tasks.map((t, index) => {
            return (
                <Draggable draggableId={t.id}
                           index={index}
                           key={t.id}>
                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                        <ToDoListTask
                            key={t.id}
                            index={index}
                            task={t}
                            changeStatus={this.props.changeStatus}
                            changeTitle={this.props.changeTitle}
                            deleteTask={this.props.deleteTask}
                            provided={provided}
                            snapshot={snapshot}
                        />
                    )}
                </Draggable>
            )
        });

        return (
            <div className={styles['todoList-tasks']}>
                {tasksElements}
            </div>
        );
    }
}


export default ToDoListTasks;

