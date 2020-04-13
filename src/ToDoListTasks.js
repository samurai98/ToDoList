import React from 'react';
import './App.css';
import ToDoListTask from "./ToDoListTask";

class ToDoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(t => {
            return <ToDoListTask title={t.title} isDone={t.isDone} priority={t.priority}/>
        });

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default ToDoListTasks;

