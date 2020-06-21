import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";
import {addToDoListAC, setToDoListsAC} from "./reducer";
import {api} from "./api";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        api.getTodolists()
            .then(res => {
                this.props.setToDoLists(res);
            });
    };

    addToDoList = (title) => {
        api.createTodolist(title)
            .then(res => {
                let todolist = res.data.item;
                this.props.addToDolist(todolist)
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

