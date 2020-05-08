import React from 'react';
import './App.css';
import ToDoListTask from "./ToDoListTask";
import PropTypes from "prop-types";

class ToDoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map(t => {
            return <ToDoListTask
                //key={task.id}
                task={t}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}/>
        });

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

ToDoListTasks.propTypes = {
    changeStatus: PropTypes.func,
    tasks: PropTypes.array
};


export default ToDoListTasks;

