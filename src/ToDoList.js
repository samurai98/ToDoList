import React from 'react';
import './App.css';
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";
import AddNewItemForm from "./AddNewItemForm";
import ToDoListTitle from "./ToDoListTitle";
import {connect} from "react-redux";
import {
    addTaskAC,
    deleteTaskAC,
    deleteToDoListAC,
    updateTaskAC
} from "./reducer";

class ToDoList extends React.Component {

    state = {
        filterValue: "All"
    };

    addTask = (newText) => {
        let newTask = {
            id: (new Date()).getTime(),
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.props.addTask(this.props.idList, newTask)
    };

    deleteToDoList = (todolistId) => {
        this.props.deleteToDoList(todolistId);
    };

    deleteTask = (todolistId, taskId) => {
        this.props.deleteTask(todolistId, taskId);
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    };

    changeTask = (taskId, obj) => {
        this.props.changeTask(this.props.idList, taskId, obj)
    };


    render = () => {

        let filtredTasks = this.props.tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Completed":
                    return t.isDone === true;
                case "Active":
                    return t.isDone === false;
                default:
                    return true;
            }
        });

        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <ToDoListTitle title={this.props.title}
                                       idList={this.props.idList}
                                       delete={this.deleteToDoList}
                        />
                        <AddNewItemForm addItem={this.addTask}/>
                    </div>
                    <ToDoListTasks
                        tasks={filtredTasks}
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTask}
                        idList={this.props.idList}
                    />
                    <ToDoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todolistId, newTask) => {
            let action = addTaskAC(todolistId, newTask);
            dispatch(action)
        },
        changeTask: (todolistId, taskId, obj) => {
            let action = updateTaskAC(todolistId, taskId, obj)
            dispatch(action)
        },
        deleteToDoList: (todolistId) => {
            let action = deleteToDoListAC(todolistId);
            dispatch(action);
        },
        deleteTask: (todolistId, taskId) => {
            let action = deleteTaskAC(todolistId, taskId);
            dispatch(action)
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoList);

