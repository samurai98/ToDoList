import React from 'react';
import PropTypes from "prop-types";

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: ''
    };

    onAddItemClick = () => {
        let newTitle = this.state.title.trim();
        if (newTitle === "") {
            this.setState({error: true});
        } else {
            this.setState({
                title: "",
                error: false
            });
            this.props.addItem(newTitle);
        }
    };
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    };
    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemClick();
        }
    };

    render = () => {
        let errorClass = this.state.error === true ? "error" : "";
        return (
            <div className="todoList-newTaskForm">
                <input
                    type="text"
                    placeholder="New item name"
                    className={errorClass}
                    onChange={this.onTitleChanged}
                    onKeyPress={this.onKeyPress}
                    value={this.state.title}
                />
                <button onClick={this.onAddItemClick}>Add</button>
            </div>
        );
    }
}

AddNewItemForm.propTypes = {
    addTask: PropTypes.func
};

export default AddNewItemForm;

