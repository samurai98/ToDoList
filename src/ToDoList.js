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
    updateTaskAC
} from "./reducer";
import axios from "axios";

class ToDoList extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.idList}/tasks`,
            {
                withCredentials: true,
                headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
            })
            .then(res => {
                if (!res.data.error) {
                    this.props.setTasks(this.props.idList, res.data.items)
                }
            });
    };

    state = {
        state: [],
        filterValue: "All"
    };

    addTask = (newText) => {
        axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.idList}/tasks`,
            {title: newText},
            {
                withCredentials: true,
                headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.addTask(this.props.idList, res.data.data.item)
                }
            });
    };

    deleteToDoList = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.idList}`,
            {
                withCredentials: true,
                headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.deleteToDoList(this.props.idList);
                }
            });

    };

    deleteTask = (todolistId, taskId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
            {
                withCredentials: true,
                headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.deleteTask(todolistId, taskId);
                }
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
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.idList}/tasks/${newTask.id}`,
            newTask,
            {
                withCredentials: true,
                headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.changeTask(res.data.data.item)
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
        },
        setTasks: (todolistId, tasks) => {
            dispatch(setTasksAC(todolistId, tasks))
        }
    }
};

export default connect(null, mapDispatchToProps)(ToDoList);

