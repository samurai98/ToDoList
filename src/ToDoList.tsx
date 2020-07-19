import React from 'react';
import './App.css';
import ToDoListTasks from './ToDoListTasks';
import ToDoListFooter from './ToDoListFooter';
import AddNewItemForm from './AddNewItemForm';
import ToDoListTitle from './ToDoListTitle';
import {connect} from 'react-redux';
import {
    addTask, deleteTask, deleteToDoList, setTasks, updateTask, updateToDoList,
} from './reducer';
import {TaskType, TodoType} from './types/entities';
import {AppStateType} from "./store";

type StateType = {
    state: Array<TodoType>
    filterValue: string
}

type OwnPropsType = {
    idList: string
    title: string
    tasks: Array<TaskType>
}

type MapDispatchPropsType = {
    setTasks: (idList: string) => void
    addTask: (newText: string, idList: string) => void
    updateToDoList: (idList: string, newListTitle: string) => void
    updateTask: (newTask: TaskType) => void
    deleteToDoList: (idList: string) => void
    deleteTask: (idList: string, taskId: string) => void
}

type PropsType = OwnPropsType & MapDispatchPropsType

class ToDoList extends React.Component<PropsType, StateType> {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setTasks(this.props.idList)
    };

    state = {
        state: [],
        filterValue: "All"
    };

    addTask = (newText: string) => {
        this.props.addTask(newText, this.props.idList)
    };

    deleteToDoList = () => {
        this.props.deleteToDoList(this.props.idList);
    };

    deleteTask = (taskId: string) => {
        this.props.deleteTask(this.props.idList, taskId)
    };

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeStatus = (newTask: TaskType, status: boolean) => {
        this.changeTask({...newTask, status: status ? 2 : 0});
    };

    changeTitle = (newTask: TaskType, title: string) => {
        this.changeTask({...newTask, title: title})
    };

    changeTask = (newTask: TaskType) => {
        this.props.updateTask(newTask)
    };

    updateTodolist = (newListTitle: string) => {
        this.props.updateToDoList(this.props.idList, newListTitle)
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

export default connect<{}, MapDispatchPropsType, OwnPropsType, AppStateType>(null, {
    setTasks, addTask, updateToDoList,
    updateTask, deleteToDoList, deleteTask
})(ToDoList);

