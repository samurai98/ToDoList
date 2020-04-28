import React from 'react';
import PropTypes from "prop-types";

class ToDoListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        error: false,
        title: ''
    }

    onAddTaskClick = () => {
        let newTitle = this.state.title.trim();
        if (newTitle === "") {
            this.setState({error: true});
        } else {
            this.setState({
                title: "",
                error: false
            });
            this.props.addTask(newTitle);
        }
    }
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick();
        }
    }

    render = () => {
        let errorClass = this.state.error === true ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        type="text"
                        placeholder="New task name"
                        className={errorClass}
                        onChange={this.onTitleChanged}
                        onKeyPress={this.onKeyPress}
                        value={this.state.title}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

ToDoListHeader.propTypes = {
    addTask: PropTypes.func
};

export default ToDoListHeader;

