import React from 'react';
import './App.css';
import ToDoListTask from './ToDoListTask';
import {TaskType} from './types/entities';

type OwnPropsType = {
    tasks: Array<TaskType>
    changeStatus: (newTask: TaskType, status: boolean) => void
    changeTitle: (newTask: TaskType, title: string) => void
    deleteTask: (taskId: string) => void
}

class ToDoListTasks extends React.Component<OwnPropsType> {
    render = () => {
        let tasksElements = this.props.tasks.map(t => {
            return <ToDoListTask
                key={t.id}
                task={t}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
                deleteTask={this.props.deleteTask}
            />
        });

        return (
            <div className='todoList-tasks'>
                {tasksElements}
            </div>
        );
    }
}


export default ToDoListTasks;

