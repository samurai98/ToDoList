import React from 'react';
import './App.css';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";


class App extends React.Component {
    tasks = [
        {title: "CSS", isDone: true, priority: "low"},
        {title: "JS", isDone: false, priority: "low"},
        {title: "ReactJS", isDone: true, priority: "low"},
        {title: "jQuery", isDone: false, priority: "low"}
    ];

    filterValue = "Completed";

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader/>
                    <ToDoListTasks tasks={this.tasks}/>
                    <ToDoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

