import React from 'react';
import './App.css';
import ToDoListHeader from "./ToDoListHeader";
import ToDoListTask from "./ToDoListTask";
import ToDoListFooter from "./ToDoListFooter";


class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <ToDoListHeader />
                    <ToDoListTask />
                    <ToDoListFooter />
                </div>
            </div>
        );
    }
}

export default App;

