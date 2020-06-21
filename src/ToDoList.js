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
    deleteToDoListAC, setTasksAC,
    updateTaskAC, updateToDoListAC
} from "./reducer";
import {api} from "./api";

class ToDoList extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        api.getTasks(this.props.idList)
            .then(res => {
                this.props.setTasks(this.props.idList, res.items)
            });
    };

    state = {
        state: [],
        filterValue: "All"
    };

    addTask = (newText) => {
        api.createTask(newText, this.props.idList)
            .then(res => {
                this.props.addTask(this.props.idList, res.data.item)
            });
    };

    deleteToDoList = () => {
        api.deleteTodolist(this.props.idList)
            .then(res => {
                this.props.deleteToDoList(this.props.idList);
            });
    };

    deleteTask = (taskId) => {
        api.deleteTask(this.props.idList, taskId)
            .then(res => {
                this.props.deleteTask(this.props.idList, taskId);
            });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeStatus = (newTask, status) => {
        this.changeTask({...newTask, status: status === true ? 2 : 0});
    };

    changeTitle = (newTask, title) => {
        this.changeTask({...newTask, title: title})
    };

    changeTask = (newTask) => {
        api.updateTask(newTask)
            .then(res => {
                this.props.changeTask(res.data.item)
            });
    };

    updateTodolist = (newListTitle) => {
        api.updateTodolist(this.props.idList, newListTitle)
            .then(res => {
                if (res.resultCode === 0) {
                    this.props.updateTodolist(this.props.idList, newListTitle)
                }
            });
    };

    render = () => {
        let {tasks = []} = this.props;

        let filtredTasks = tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Completed":
                    return t.status === 2;
                case "Active":
                    return t.status === 0;
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
                                       updateTodolist={this.updateTodolist}
                        />
                        <AddNewItemForm addItem={this.addTask}/>
                    </div>
                    <ToDoListTasks
                        tasks={filtredTasks}
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTask}
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
        setTasks: (todolistId, tasks) => {
            dispatch(setTasksAC(todolistId, tasks))
        },
        addTask: (todolistId, newTask) => {
            let action = addTaskAC(todolistId, newTask);
            dispatch(action)
        },
        updateTodolist: (todoListId, newTitle) => {
            let action = updateToDoListAC(todoListId, newTitle);
            dispatch(action)
        },
        changeTask: (task) => {
            let action = updateTaskAC(task);
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

