import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import DeleteItemForm from "./DeleteItemForm";


class ToDoListTask extends React.Component {
    state = {
        isEditMode: false,
        title: this.props.task.title
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value});
    };

    activateEditMode = () => {
        this.setState({isEditMode: true});
    };

    deActivateEditMode = () => {
        this.setState({isEditMode: false});
        this.props.changeTitle(this.props.task, this.state.title);
    };

    render = () => {
        let isStatus = this.props.task.status === 2;
        let isOpacity = isStatus ? 'todoList-task done' : 'todoList-task';
        return (
            <div className={isOpacity}>
                <input
                    type="checkbox"
                    checked={isStatus}
                    onChange={this.onIsDoneChanged}
                />
                {this.state.isEditMode
                    ? <input onBlur={this.deActivateEditMode}
                             onChange={this.onTitleChanged}
                             autoFocus={true}
                             value={this.state.title}/>
                    : <span onClick={this.activateEditMode}
                            title={`id this task: ${this.props.task.id}`}
                    >{this.props.task.title}</span>
                }<span>, priority: {this.props.task.priority}</span>
                <DeleteItemForm delete={this.props.deleteTask}
                                taskId={this.props.task.id}
                />

            </div>
        );
    }
}

ToDoListTask.propTypes = {
    changeStatus: PropTypes.func,
    task: PropTypes.object
};

export default ToDoListTask;

