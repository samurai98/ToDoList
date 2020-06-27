import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddNewItemForm from './AddNewItemForm';
import {connect} from "react-redux";
import {addToDoList, setToDoLists} from "./reducer";

class App extends React.Component {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setToDoLists();
    };

    addToDoList = (title) => {
        this.props.addToDoList(title);
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToDolist: (newToDoList) => {
//             dispatch(addToDoListAC(newToDoList));
//         },
//         getTodo: () => {
//             dispatch(setTodolists())
//         }
//     }
// };

export default connect(mapStateToProps, {setToDoLists, addToDoList})(App);

