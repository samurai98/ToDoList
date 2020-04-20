import React from 'react';
import './App.css';
import ToDoListTasks from "./ToDoListTasks";
import ToDoListFooter from "./ToDoListFooter";
import ToDoListHeader from "./ToDoListHeader";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.newTaskTitleRef = React.createRef();
    // }

    state = {
        tasks: [
            {title: "CSS", isDone: true, priority: "low"},
            {title: "JS", isDone: false, priority: "low"},
            {title: "ReactJS", isDone: true, priority: "low"},
            {title: "jQuery", isDone: false, priority: "low"},
            {title: "JS", isDone: false, priority: "low"},
            {title: "ReactJS", isDone: true, priority: "low"},
            {title: "jQuery", isDone: false, priority: "low"}
        ],
        filterValue: "All"
    };

    addTask = (newTitle) => {
        let newTask = {
            title: newTitle, isDone: false, priority: "low"
        };
        this.setState((state) => ({tasks: [...this.state.tasks, newTask]}));
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})
    }

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if(t === task) {
                return {...t, isDone: isDone}
            }
            return t;
        })
        this.setState({tasks: newTasks})
    }

    render = () => {
        let filtredTasks = this.state.tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Completed":
                    return t.isDone === true
                case "Active":
                    return t.isDone === false
                default:
                    return true;
            }
        });

        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader addTask={this.addTask}/>
                    <ToDoListTasks
                        tasks={filtredTasks}
                        changeStatus={this.changeStatus}
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

export default App;

