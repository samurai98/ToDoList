import React from 'react';
import './App.css';
import PropTypes from "prop-types";


class ToDoListTask extends React.Component {
    state = {
        isEditMode: false
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    };

    activateEditMode = () => {
        this.setState({isEditMode: true});
    };

    deActivateEditMode = () => {
        this.setState({isEditMode: false});
    };


    render = () => {
        let isOpacity = this.props.task.isDone ? 'todoList-task done' : 'todoList-task';
        return (
            <div className={isOpacity}>
                <input
                    type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged}
                />
                {this.state.isEditMode
                    ? <input onBlur={this.deActivateEditMode}
                             onChange={this.onTitleChanged}
                             autoFocus={true}
                             value={this.props.task.title}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.id} - {this.props.task.title}</span>
                }<span>, priority: {this.props.task.priority}</span>

            </div>
        );
    }
}

ToDoListTask.propTypes = {
    changeStatus: PropTypes.func,
    task: PropTypes.object
};

export default ToDoListTask;

