import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";


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
        let stateAsString = localStorage.getItem("todolists");
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
        let newToDoList = {
            id: 4,
            title: title,
            "tasks": []
        };
        this.props.createToDolist(newToDoList)
        //this.nextToDoListId++;
        //let newTitles = [...this.state.todolists, newTitle];
        // this.setState({
        //     todolists: newTitles
        // }, () => {
        //     this.saveState();
        // });
    };

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("todolists", stateAsString);
    };


    render = () => {

        const todolists = this.props
            .todolists
            .map(tl => <ToDoList key={tl.id} idList={tl.id} title={tl.title} tasks={tl.tasks}/>);

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

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createToDolist: (newToDoList) => {
            let action = {
                type: 'CREATE_TODOLIST',
                newToDoList
            };
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

