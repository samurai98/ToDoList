import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import AddNewItemForm from './components/common/AddNewItemForm/AddNewItemForm';
import {connect} from 'react-redux';
import {addToDoList, setToDoLists, reorderTask, deleteTask, addTask, updateTask} from './redux/reducer';
import {TaskType, TodoType} from './types/entities';
import {AppStateType} from './redux/store';
import {DragDropContext} from 'react-beautiful-dnd';

type MapStatePropsType = {
    todolists: Array<TodoType>
}

type MapDispatchPropsType = {
    setToDoLists: () => void
    addToDoList: (title: string) => void
    reorderTask: (todolistId: string, taskId: string, putAfterItemId: string) => void
    deleteTask: (idList: string, taskId: string) => void
    addTask: (newText: string, idList: string) => any
    updateTask: (newTask: TaskType) => void
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

    onDragEnd = async (result: any) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index
            && result.destination.droppableId === result.source.droppableId) {
            return;
        }

        // if user want drag task in other list
        if (result.destination.droppableId !== result.source.droppableId) {

            // add this task in new list
            let task = this.props.todolists[result.source.droppableId].tasks[result.source.index];
            let newListId = this.props.todolists[result.destination.droppableId].id;
            let newTaskId = await this.props.addTask(task.title, newListId);

            // set this task priority in new list
            if (task.priority !== 1) {
                this.props.updateTask({...task, todoListId: newListId, id: newTaskId, priority: task.priority})
            }

            // delete this task in old list
            let listWhereDeleteTask = this.props.todolists[result.source.droppableId].id;
            this.props.deleteTask(listWhereDeleteTask, result.draggableId);

            // reorder this task on it position
            let endNewTaskPositionId;
            if (result.destination.index === 0) {
                endNewTaskPositionId = '';
            } else endNewTaskPositionId = this.props.todolists[result.destination.droppableId].tasks[result.destination.index - 1].id;
            this.props.reorderTask(newListId, newTaskId, endNewTaskPositionId);

        } else {
            let listIndex = result.destination.droppableId;
            let listId = this.props.todolists[listIndex].id;

            let thisTaskId = result.draggableId;
            let endTaskPositionIndex = result.destination.index;

            let endTaskPositionId;
            if (endTaskPositionIndex === 0) {
                endTaskPositionId = '';
            } else if (result.source.index > endTaskPositionIndex) {
                endTaskPositionId = this.props.todolists[listIndex].tasks[endTaskPositionIndex - 1].id;
            } else endTaskPositionId = this.props.todolists[listIndex].tasks[endTaskPositionIndex].id;
            this.props.reorderTask(listId, thisTaskId, endTaskPositionId);
        }
    };

    render = () => {
        const todolists = this.props
            .todolists
            .map((tl, index) =>
                <ToDoList key={tl.id}
                          index={index}
                          idList={tl.id}
                          title={tl.title}
                          tasks={tl.tasks}/>);

        return (
            <div className='App'>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className='todolists'>
                        {todolists}
                    </div>
                    <AddNewItemForm addItem={this.addToDoList}/>
                </DragDropContext>
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
    addToDoList,
    reorderTask,
    addTask,
    updateTask,
    deleteTask
})(App);

