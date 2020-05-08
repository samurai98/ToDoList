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
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue});
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            } else {
                return {...t, ...obj};
            }
        });

        this.setState({
            tasks: newTasks
        }, () => {
            this.saveState();
        });
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("our-state", stateAsString);
    }

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All",
        };
        let stateAsString = localStorage.getItem("our-state");
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
                        changeTitle={this.changeTitle}
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

