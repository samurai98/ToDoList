import {api} from "../api/api";
import {TaskType, TodoType} from "../types/entities";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

export const SET_TODOLISTS_SUCCESS = 'TodoAPP/Todolist/SET-TODOLISTS-SUCCESS';
export const SET_TODOLISTS_ERROR = 'TodoAPP/Todolist/SET-TODOLISTS-ERROR';

export const SET_TASKS_SUCCESS = 'TodoAPP/Todolist/SET-TASKS-SUCCESS';
export const SET_TASKS_ERROR = 'TodoAPP/Todolist/SET-TASKS-ERROR';

export const ADD_TODOLIST_SUCCESS = 'TodoAPP/Todolist/ADD-TODOLIST-SUCCESS';
export const ADD_TODOLIST_ERROR = 'TodoAPP/Todolist/ADD-TODOLIST-ERROR';

export const ADD_TASK_SUCCESS = 'TodoAPP/Todolist/ADD-TASK-SUCCESS';
export const ADD_TASK_ERROR = 'TodoAPP/Todolist/ADD-TASK-ERROR';

export const UPDATE_TODOLIST_SUCCESS = 'TodoAPP/Todolist/UPDATE_TODOLIST-SUCCESS';
export const UPDATE_TODOLIST_ERROR = 'TodoAPP/Todolist/UPDATE_TODOLIST-ERROR';

export const UPDATE_TASK_SUCCESS = 'TodoAPP/Todolist/UPDATE-TASK-SUCCESS';
export const UPDATE_TASK_ERROR = 'TodoAPP/Todolist/UPDATE-TASK-ERROR';

export const DELETE_TODOLIST_SUCCESS = 'TodoAPP/Todolist/DELETE-TODOLIST-SUCCESS';
export const DELETE_TODOLIST_ERROR = 'TodoAPP/Todolist/DELETE-TODOLIST-ERROR';

export const DELETE_TASK_SUCCESS = 'TodoAPP/Todolist/DELETE-TASK-SUCCESS';
export const DELETE_TASK_ERROR = 'TodoAPP/Todolist/DELETE-TASK-ERROR';


type InitialStateType = {
    todolists: Array<TodoType>
    error: boolean
}


const initialState: InitialStateType = {
    todolists: [],
    error: false
};

export const reducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_TODOLISTS_SUCCESS:
            return {
                ...state,
                todolists: action.todolists.map(todolist => {
                    return {...todolist, tasks: []}
                })
            };
        case SET_TODOLISTS_ERROR:
            return {
                ...state, error: true
            };

        case SET_TASKS_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(todolist => {
                    if (todolist.id !== action.todolistId) {
                        return todolist
                    } else {
                        return {...todolist, tasks: action.tasks}
                    }
                })
            };
        case SET_TASKS_ERROR:
            return {
                ...state, error: true
            };

        case ADD_TODOLIST_SUCCESS:
            return {...state, todolists: [...state.todolists, action.newToDoList]};
        case ADD_TODOLIST_ERROR:
            return {...state, error: true};

        case ADD_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                    if (todo.id !== action.todolistId) {
                        return todo
                    } else {
                        return {...todo, tasks: [...todo.tasks, action.newTask]}
                    }
                })
            };
        case ADD_TASK_ERROR:
            return {...state, error: true};

        case UPDATE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                    if (todo.id !== action.todoListId) {
                        return todo
                    } else {
                        return {
                            ...todo,
                            title: action.newTitle
                        }
                    }
                })
            };
        case UPDATE_TODOLIST_ERROR:
            return {...state, error: true};

        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                    if (todo.id !== action.task.todoListId) {
                        return todo
                    } else {
                        return {
                            ...todo,
                            tasks: todo.tasks.map(task => {
                                if (task.id !== action.task.id) {
                                    return task;
                                } else {
                                    return action.task;
                                }
                            })
                        }
                    }
                })
            };
        case UPDATE_TASK_ERROR:
            return {...state, error: true};

        case DELETE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.filter(todo => todo.id !== action.todolistId)
            };
        case DELETE_TODOLIST_ERROR:
            return {...state, error: true};

        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(todo => {
                    if (todo.id === action.todolistId) {
                        return {
                            ...todo,
                            tasks: todo.tasks.filter(task => task.id !== action.taskId)
                        }
                    } else return todo;
                })
            };
        case DELETE_TASK_ERROR:
            return {...state, error: true};

        default:
            return state;
    }
};


// ActionCreators

type ActionsType =
    SetToDoListsSuccessActionType
    | SetToDoListsErrorActionType
    | SetTasksSuccessActionType
    | SetTasksErrorActionType
    | AddToDoListSuccessActionType
    | AddToDoListErrorActionType
    | AddTaskSuccessActionType
    | AddTaskErrorActionType
    | UpdateToDoListSuccessActionType
    | UpdateToDoListErrorActionType
    | UpdateTaskSuccessActionType
    | UpdateTaskErrorActionType
    | DeleteToDoListSuccessActionType
    | DeleteToDoListErrorActionType
    | DeleteTaskSuccessActionType
    | DeleteTaskErrorActionType

type SetToDoListsSuccessActionType = {
    type: typeof SET_TODOLISTS_SUCCESS
    todolists: Array<TodoType>
}
type SetToDoListsErrorActionType = {
    type: typeof SET_TODOLISTS_ERROR
}

type SetTasksSuccessActionType = {
    type: typeof SET_TASKS_SUCCESS
    todolistId: string
    tasks: Array<TaskType>
}
type SetTasksErrorActionType = {
    type: typeof SET_TASKS_ERROR
}

type AddToDoListSuccessActionType = {
    type: typeof ADD_TODOLIST_SUCCESS
    newToDoList: TodoType
}
type AddToDoListErrorActionType = {
    type: typeof ADD_TODOLIST_ERROR
}

type AddTaskSuccessActionType = {
    type: typeof ADD_TASK_SUCCESS
    todolistId: string
    newTask: TaskType
}
type AddTaskErrorActionType = {
    type: typeof ADD_TASK_ERROR
}

type UpdateToDoListSuccessActionType = {
    type: typeof UPDATE_TODOLIST_SUCCESS
    todoListId: string
    newTitle: string
}
type UpdateToDoListErrorActionType = {
    type: typeof UPDATE_TODOLIST_ERROR
}

type UpdateTaskSuccessActionType = {
    type: typeof UPDATE_TASK_SUCCESS
    task: TaskType
}
type UpdateTaskErrorActionType = {
    type: typeof UPDATE_TASK_ERROR
}

type DeleteToDoListSuccessActionType = {
    type: typeof DELETE_TODOLIST_SUCCESS
    todolistId: string
}
type DeleteToDoListErrorActionType = {
    type: typeof DELETE_TODOLIST_ERROR
}

type DeleteTaskSuccessActionType = {
    type: typeof DELETE_TASK_SUCCESS
    todolistId: string
    taskId: string
}
type DeleteTaskErrorActionType = {
    type: typeof DELETE_TASK_ERROR
}


export const setToDoListsSuccess = (todolists: Array<TodoType>): SetToDoListsSuccessActionType => {
    return {
        type: SET_TODOLISTS_SUCCESS,
        todolists
    };
};
export const setToDoListsError = (): SetToDoListsErrorActionType => {
    return {type: SET_TODOLISTS_ERROR};
};

export const setTasksSuccess = (todolistId: string, tasks: Array<TaskType>): SetTasksSuccessActionType => {
    return {
        type: SET_TASKS_SUCCESS,
        todolistId,
        tasks
    };
};
export const setTasksError = (): SetTasksErrorActionType => {
    return {type: SET_TASKS_ERROR};
};

export const addToDoListSuccess = (newToDoList: TodoType): AddToDoListSuccessActionType => {
    return {
        type: ADD_TODOLIST_SUCCESS,
        newToDoList
    }
};
export const addToDoListError = (): AddToDoListErrorActionType => {
    return {type: ADD_TODOLIST_ERROR};
};

export const addTaskSuccess = (todolistId: string, newTask: TaskType): AddTaskSuccessActionType => {
    return {
        type: ADD_TASK_SUCCESS,
        todolistId,
        newTask
    };
};
export const addTaskError = (): AddTaskErrorActionType => {
    return {type: ADD_TASK_ERROR};
};

export const updateToDoListSuccess = (todoListId: string, newTitle: string): UpdateToDoListSuccessActionType => {
    return {type: UPDATE_TODOLIST_SUCCESS, todoListId, newTitle};
};
export const updateToDoListError = (): UpdateToDoListErrorActionType => {
    return {type: UPDATE_TODOLIST_ERROR};
};

export const updateTaskSuccess = (task: TaskType): UpdateTaskSuccessActionType => {
    return {type: UPDATE_TASK_SUCCESS, task};
};
export const updateTaskError = (): UpdateTaskErrorActionType => {
    return {type: UPDATE_TASK_ERROR};
};

export const deleteToDoListSuccess = (todolistId: string): DeleteToDoListSuccessActionType => {
    return {
        type: DELETE_TODOLIST_SUCCESS,
        todolistId
    };
};
export const deleteToDoListError = (): DeleteToDoListErrorActionType => {
    return {type: DELETE_TODOLIST_ERROR};
};

export const deleteTaskSuccess = (todolistId: string, taskId: string): DeleteTaskSuccessActionType => {
    return {
        type: DELETE_TASK_SUCCESS,
        todolistId,
        taskId
    };
};
export const deleteTaskError = (): DeleteTaskErrorActionType => {
    return {type: DELETE_TASK_ERROR};
};

// Thunk

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

export const setToDoLists = (): ThunkType => (dispatch: ThunkDispatchType) => {
    api.getTodolists()
        .then(res => {
            dispatch(setToDoListsSuccess(res))
        })
        .catch(() => {
            dispatch(setToDoListsError())
        })
};

export const setTasks = (idList: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.getTasks(idList)
        .then(res => {
            dispatch(setTasksSuccess(idList, res.items))
        })
        .catch(() => {
            dispatch(setTasksError())
        })
};

export const addToDoList = (title: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.createTodolist(title)
        .then(res => {
            let todolist = res.data.item;
            dispatch(addToDoListSuccess(todolist));
        })
        .catch(() => {
            dispatch(addToDoListError())
        })
};

export const addTask = (newText: string, idList: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    let newTaskId = '';
    await api.createTask(newText, idList)
        .then(res => {
            dispatch(addTaskSuccess(idList, res.data.item));
            newTaskId = res.data.item.id;
        })
        .catch(() => {
            dispatch(addTaskError())
        });
    return newTaskId;
};

export const updateToDoList = (idList: string, newListTitle: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.updateTodolist(idList, newListTitle)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(updateToDoListSuccess(idList, newListTitle));
            }
        })
        .catch(() => {
            dispatch(updateToDoListError())
        })
};

export const updateTask = (newTask: TaskType): ThunkType => (dispatch: ThunkDispatchType) => {
    api.updateTask(newTask)
        .then(res => {
            dispatch(updateTaskSuccess(res.data.item))
        })
        .catch(() => {
            dispatch(updateTaskError())
        })
};

export const deleteToDoList = (idList: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.deleteTodolist(idList)
        .then(() => {
            dispatch(deleteToDoListSuccess(idList))
        })
        .catch(() => {
            dispatch(deleteToDoListError())
        })
};

export const deleteTask = (idList: string, taskId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    api.deleteTask(idList, taskId)
        .then(() => {
            dispatch(deleteTaskSuccess(idList, taskId));
        })
        .catch(() => {
            dispatch(deleteTaskError())
        })
};

export const reorderTask = (todolistId: string, taskId: string, putAfterItemId: string): ThunkType =>
    (dispatch: ThunkDispatchType) => {
        api.reorderTask(todolistId, taskId, putAfterItemId)
            .then(() => {
                dispatch(setTasks(todolistId))
            })
            .catch(() => {
                dispatch(setTasksError())
            })
    };


