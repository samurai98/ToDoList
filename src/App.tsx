import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import AddNewItemForm from './components/common/AddNewItemForm/AddNewItemForm';
import {connect} from "react-redux";
import {addToDoList, setToDoLists} from "./redux/reducer";
import {TodoType} from "./types/entities";
import {AppStateType} from "./redux/store";

type MapStatePropsType = {
    todolists: Array<TodoType>
}

type MapDispatchPropsType = {
    setToDoLists: () => void
    addToDoList: (title: string) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType;

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setToDoLists();
    };

    addToDoList = (title: string) => {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        todolists: state.reducer.todolists
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    setToDoLists,
    addToDoList
})(App);

