import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import AddNewItemForm from "./AddNewItemForm";


class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    state = {
        todolists: []
    };

    nextToDoListId = 0;

    restoreState = () => {
        let state = this.state;
        let stateAsString = localStorage.getItem("our-state-lists");
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {
            this.state.todolists.forEach(t => {
                if (t.id >= this.nextToDoListId) {
                    this.nextToDoListId = t.id + 1
                }
            })
        });
    };

    addToDoList = (title) => {
        let newTitle = {
            id: this.nextToDoListId,
            title: title
        };
        this.nextToDoListId++;
        let newTitles = [...this.state.todolists, newTitle];
        this.setState({
            todolists: newTitles
        }, () => {
            this.saveState();
        });
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todolists", stateAsString);
    };


    render = () => {

        const todolists = this.state
            .todolists
            .map(tl => <ToDoList key={tl.id} id={tl.id} title={tl.title}/>);

        return (
            <div>
                <div>
                    <AddNewItemForm addItem={this.addToDoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </div>

        );
    }
}

export default App;

