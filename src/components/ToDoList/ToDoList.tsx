import React from 'react';
import '../../App.css';
import ToDoListTasks from './ToDoListTasks/ToDoListTasks';
import ToDoListFooter from './ToDoListFooter/ToDoListFooter';
import AddNewItemForm from '../common/AddNewItemForm/AddNewItemForm';
import ToDoListTitle from './ToDoListTitle/ToDoListTitle';
import {connect} from 'react-redux';
import {
    addTask, deleteTask, deleteToDoList, setTasks, updateTask, updateToDoList
} from '../../redux/reducer';
import {TaskType, TodoType} from '../../types/entities';
import {AppStateType} from '../../redux/store';
import styles from './ToDoList.module.css';
import {DraggableStateSnapshot, Droppable, DraggableProvided} from 'react-beautiful-dnd';
import Preloader from '../common/Preloader/Preloader';

type StateType = {
    state: Array<TodoType>
    filterValue: string
}

type OwnPropsType = {
    idList: string
    title: string
    tasks: Array<TaskType>
    index: number
    provided: DraggableProvided
    snapshot: DraggableStateSnapshot
}

type MapStatePropsType = {
    isLoadingList: boolean
}

type MapDispatchPropsType = {
    setTasks: (idList: string) => void
    addTask: (newText: string, idList: string) => void
    updateToDoList: (idList: string, newListTitle: string) => void
    updateTask: (newTask: TaskType) => void
    deleteToDoList: (idList: string) => void
    deleteTask: (idList: string, taskId: string) => void
}

type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class ToDoList extends React.Component<PropsType, StateType> {

    componentDidMount() {
        this.restoreState();
    }

    restoreState = () => {
        this.props.setTasks(this.props.idList);
    };

    state = {
        state: [],
        filterValue: 'All'
    };

    addTask = (newText: string) => {
        this.props.addTask(newText, this.props.idList)
    };

    deleteToDoList = () => {
        this.props.deleteToDoList(this.props.idList);
    };

    deleteTask = (taskId: string) => {
        this.props.deleteTask(this.props.idList, taskId)
    };

    changeFilter = (newFilterValue: string) => {
        this.setState({
            filterValue: newFilterValue
        });
    };

    changeStatus = (newTask: TaskType, status: boolean) => {
        this.changeTask({...newTask, status: status ? 2 : 0});
    };

    changeTitle = (newTask: TaskType, title: string, priority: number) => {
        this.changeTask({...newTask, title: title, priority: priority})
    };

    changeTask = (newTask: TaskType) => {
        this.props.updateTask(newTask)
    };

    updateTodolist = (newListTitle: string) => {
        this.props.updateToDoList(this.props.idList, newListTitle)
    };


    render = () => {
        let {tasks = []} = this.props;

        let filtredTasks = tasks.filter(t => {
            switch (this.state.filterValue) {
                case 'Completed':
                    return t.status === 2;
                case 'Active':
                    return t.status === 0;
                default:
                    return true;
            }
        });
        return (<>
                <div className={styles.todoList}
                     ref={this.props.provided.innerRef}
                     {...this.props.provided.draggableProps}>
                    <div className={styles.content} key={this.props.idList}>
                        {this.props.isLoadingList
                            ? <Preloader height={'35vh'}/>
                            : <>
                                <div  {...this.props.provided.dragHandleProps}>
                                    <ToDoListTitle title={this.props.title}
                                                   idList={this.props.idList}
                                                   delete={this.deleteToDoList}
                                                   updateTodolist={this.updateTodolist}/>
                                </div>
                                <Droppable droppableId={this.props.index + ''} type={'task'}>
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                             {...provided.droppableProps}>
                                            <ToDoListTasks
                                                tasks={filtredTasks}
                                                changeStatus={this.changeStatus}
                                                changeTitle={this.changeTitle}
                                                deleteTask={this.deleteTask}
                                            />
                                            {provided.placeholder}
                                        </div>)}
                                </Droppable>
                                <AddNewItemForm addItem={this.addTask}/>
                            </>}
                        <ToDoListFooter
                            filterValue={this.state.filterValue}
                            changeFilter={this.changeFilter}
                        />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoadingList: state.reducer.isLoadingList
    }
};

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    setTasks, addTask, updateToDoList,
    updateTask, deleteToDoList, deleteTask
})(ToDoList);

