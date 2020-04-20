import React from 'react';
import PropTypes from "prop-types";

class ToDoListHeader extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        this.props.addTask(newTitle);

    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        type="text"
                        placeholder="New task name"
                        ref={this.newTaskTitleRef}
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

