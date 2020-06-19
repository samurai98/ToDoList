import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";
import {addToDoListAC, setToDoListsAC} from "./reducer";
import axios from 'axios';

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", {withCredentials: true})
            .then(res => {
                this.props.setToDoLists(res.data);
            });
    };

    addToDoList = (title) => {

        axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",
            {title},
            {
                withCredentials: true,
                headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.addToDolist(res.data.data.item)
                }
            });
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
        addToDolist: (newToDoList) => {
            dispatch(addToDoListAC(newToDoList));
        },
        setToDoLists: (todolists) => {
            dispatch(setToDoListsAC(todolists))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

