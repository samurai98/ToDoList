import React from 'react';
import './App.css';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "low"},
            {title: "ReactJS", isDone: true, priority: "low"},
            {title: "jQuery", isDone: false, priority: "low"}
        ],
        filterValue: "Completed"
    };

    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        let newTask = {
            title: newTitle, isDone: false, priority: "low"
        };
        this.setState((state) => ({tasks: [...this.state.tasks, newTask]}));

    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input
                                type="text"
                                placeholder="New task name"
                                ref={this.newTaskTitleRef}/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    {/*<ToDoListHeader/>*/}
                    <ToDoListTasks tasks={this.state.tasks}/>
                    <ToDoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

