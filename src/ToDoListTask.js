import React from 'react';
import './App.css';
import PropTypes from "prop-types";

class ToDoListTask extends React.Component {
   onIsDoneChanged = (e) => {
       this.props.changeStatus(this.props.task, e.currentTarget.checked)
   }


    render = () => {
       let isOpacity = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';
        return (
            <div className={isOpacity}>
                <input
                    type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged}
                />
                <span>{this.props.task.title} === {this.props.task.priority}</span>
            </div>
        );
    }
}

ToDoListTask.propTypes = {
    changeStatus: PropTypes.func,
    task: PropTypes.object
};

export default ToDoListTask;

