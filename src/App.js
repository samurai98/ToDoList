import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";
import {ADD_TODOLIST, addToDoListAC} from "./reducer";


class App extends React.Component {

    nextToDoListId = 0;

    addToDoList = (title) => {
        let newToDoList = {
            id: this.nextToDoListId,
            title: title,
            "tasks": []
        };
        this.props.createToDolist(newToDoList)
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
            dispatch(addToDoListAC(newToDoList));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

