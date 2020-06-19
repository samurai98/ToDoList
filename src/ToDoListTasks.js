import React from 'react';
import './App.css';
import ToDoListTask from "./ToDoListTask";
import PropTypes from "prop-types";

class ToDoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(t => {
            return <ToDoListTask
                key={t.id}
                task={t}
                changeStatus={this.props.changeStatus}
                changeTitle={this.props.changeTitle}
                deleteTask={this.props.deleteTask}
                idList={this.props.idList}
            />
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

