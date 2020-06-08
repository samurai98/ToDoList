import React from 'react';
import './App.css';
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";
import AddNewItemForm from "./AddNewItemForm";
import ToDoListTitle from "./ToDoListTitle";
import {connect} from "react-redux";

class ToDoList extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: "All"
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        // this.nextTaskId++;
        // let newTasks = [...this.state.tasks, newTask];
        // this.setState({
        //     tasks: newTasks
        // }, () => {
        //     this.saveState();
        // });

        this.props.addTask(this.props.id, newTask)
    };

    deleteToDoList = (todolistId) => {
        this.props.deleteToDoList(todolistId);
    };

    deleteTask = (todolistId, taskId) => {
        this.props.deleteTask(todolistId, taskId);
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue});
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    };

    changeTask = (taskId, obj) => {
        this.props.changeTask(this.props.id, taskId, obj)
        // let newTasks = this.state.tasks.map(t => {
        //     if (t.id !== taskId) {
        //         return t;
        //     } else {
        //         return {...t, ...obj};
        //     }
        // });
        //
        // this.setState({
        //     tasks: newTasks
        // }, () => {
        //     this.saveState();
        // });
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state-" + this.props.id, stateAsString);
    };

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("our-state-" + this.props.id);
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        });
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
            let action = {
                type: 'ADD_TASK',
                todolistId,
                newTask
            };
            dispatch(action)
        },
        changeTask: (todolistId, taskId, obj) => {
            let action = {
                type: 'CHANGE_TASK',
                todolistId,
                taskId,
                obj
            };
            dispatch(action)
        },
        deleteToDoList: (todolistId) => {
            let action = {
                type: 'DELETE_TODOLIST',
                todolistId
            };
            dispatch(action)
        },
        deleteTask: (todolistId, taskId) => {
            let action = {
                type: 'DELETE_TASK',
                todolistId,
                taskId
            };
            dispatch(action)
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoList);

