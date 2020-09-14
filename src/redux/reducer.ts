import {api} from '../api/api';
import {TaskType, TodoType} from '../types/entities';
import {AppStateType} from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

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

export const TOGGLE_IS_LOADING = 'TodoAPP/Todolist/TOGGLE-IS-LOADING';
export const TOGGLE_IS_LOADING_LIST = 'TodoAPP/Todolist/TOGGLE-IS-LOADING-LIST';


type InitialStateType = {
    todolists: Array<TodoType>
    error: string
    isLoading: boolean
    isLoadingList: boolean
}


const initialState: InitialStateType = {
    todolists: [],
    error: '',
    isLoading: true,
    isLoadingList: true
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
                ...state, error: action.error ? 'SET TODOLISTS ERROR. ' + action.error : ''
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
                ...state, error: action.error ? 'SET TASKS ERROR. ' + action.error : ''
            };

        case ADD_TODOLIST_SUCCESS:
            return {...state, todolists: [...state.todolists, action.newToDoList]};
        case ADD_TODOLIST_ERROR:
            return {...state, error: action.error ? 'ADD TODOLIST ERROR. ' + action.error : ''};

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
            return {...state, error: action.error ? 'ADD TASK ERROR. ' + action.error : ''};

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
            return {...state, error: action.error ? 'UPDATE TODOLIST ERROR. ' + action.error : ''};

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
            return {...state, error: action.error ? 'UPDATE TASK ERROR. ' + action.error : ''};

        case DELETE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.filter(todo => todo.id !== action.todolistId)
            };
        case DELETE_TODOLIST_ERROR:
            return {...state, error: action.error ? 'DELETE TODOLIST ERROR. ' + action.error : ''};

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
            return {...state, error: action.error ? 'DELETE TASK ERROR. ' + action.error : ''};

        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading};
        case TOGGLE_IS_LOADING_LIST:
            return {...state, isLoadingList: action.isLoading};

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
    | ToggleIsLoadingActionType
    | ToggleIsLoadingListActionType

type SetToDoListsSuccessActionType = {
    type: typeof SET_TODOLISTS_SUCCESS
    todolists: Array<TodoType>
}
type SetToDoListsErrorActionType = {
    type: typeof SET_TODOLISTS_ERROR
    error: string
}

type SetTasksSuccessActionType = {
    type: typeof SET_TASKS_SUCCESS
    todolistId: string
    tasks: Array<TaskType>
}
type SetTasksErrorActionType = {
    type: typeof SET_TASKS_ERROR
    error: string
}

type AddToDoListSuccessActionType = {
    type: typeof ADD_TODOLIST_SUCCESS
    newToDoList: TodoType
}
type AddToDoListErrorActionType = {
    type: typeof ADD_TODOLIST_ERROR
    error: string
}

type AddTaskSuccessActionType = {
    type: typeof ADD_TASK_SUCCESS
    todolistId: string
    newTask: TaskType
}
type AddTaskErrorActionType = {
    type: typeof ADD_TASK_ERROR
    error: string
}

type UpdateToDoListSuccessActionType = {
    type: typeof UPDATE_TODOLIST_SUCCESS
    todoListId: string
    newTitle: string
}
type UpdateToDoListErrorActionType = {
    type: typeof UPDATE_TODOLIST_ERROR
    error: string
}

type UpdateTaskSuccessActionType = {
    type: typeof UPDATE_TASK_SUCCESS
    task: TaskType
}
type UpdateTaskErrorActionType = {
    type: typeof UPDATE_TASK_ERROR
    error: string
}

type DeleteToDoListSuccessActionType = {
    type: typeof DELETE_TODOLIST_SUCCESS
    todolistId: string
}
type DeleteToDoListErrorActionType = {
    type: typeof DELETE_TODOLIST_ERROR
    error: string
}

type DeleteTaskSuccessActionType = {
    type: typeof DELETE_TASK_SUCCESS
    todolistId: string
    taskId: string
}
type DeleteTaskErrorActionType = {
    type: typeof DELETE_TASK_ERROR
    error: string
}
type ToggleIsLoadingActionType = {
    type: typeof TOGGLE_IS_LOADING
    isLoading: boolean
}
type ToggleIsLoadingListActionType = {
    type: typeof TOGGLE_IS_LOADING_LIST
    isLoading: boolean
}


export const setToDoListsSuccess = (todolists: Array<TodoType>): SetToDoListsSuccessActionType => {
    return {
        type: SET_TODOLISTS_SUCCESS,
        todolists
    };
};
export const setToDoListsError = (error: string): SetToDoListsErrorActionType => {
    return {type: SET_TODOLISTS_ERROR, error};
};

export const setTasksSuccess = (todolistId: string, tasks: Array<TaskType>): SetTasksSuccessActionType => {
    return {
        type: SET_TASKS_SUCCESS,
        todolistId,
        tasks
    };
};
export const setTasksError = (error: string): SetTasksErrorActionType => {
    return {type: SET_TASKS_ERROR, error};
};

export const addToDoListSuccess = (newToDoList: TodoType): AddToDoListSuccessActionType => {
    return {
        type: ADD_TODOLIST_SUCCESS,
        newToDoList
    }
};
export const addToDoListError = (error: string): AddToDoListErrorActionType => {
    return {type: ADD_TODOLIST_ERROR, error};
};

export const addTaskSuccess = (todolistId: string, newTask: TaskType): AddTaskSuccessActionType => {
    return {
        type: ADD_TASK_SUCCESS,
        todolistId,
        newTask
    };
};
export const addTaskError = (error: string): AddTaskErrorActionType => {
    return {type: ADD_TASK_ERROR, error};
};

export const updateToDoListSuccess = (todoListId: string, newTitle: string): UpdateToDoListSuccessActionType => {
    return {type: UPDATE_TODOLIST_SUCCESS, todoListId, newTitle};
};
export const updateToDoListError = (error: string): UpdateToDoListErrorActionType => {
    return {type: UPDATE_TODOLIST_ERROR, error};
};

export const updateTaskSuccess = (task: TaskType): UpdateTaskSuccessActionType => {
    return {type: UPDATE_TASK_SUCCESS, task};
};
export const updateTaskError = (error: string): UpdateTaskErrorActionType => {
    return {type: UPDATE_TASK_ERROR, error};
};

export const deleteToDoListSuccess = (todolistId: string): DeleteToDoListSuccessActionType => {
    return {
        type: DELETE_TODOLIST_SUCCESS,
        todolistId
    };
};
export const deleteToDoListError = (error: string): DeleteToDoListErrorActionType => {
    return {type: DELETE_TODOLIST_ERROR, error};
};

export const deleteTaskSuccess = (todolistId: string, taskId: string): DeleteTaskSuccessActionType => {
    return {
        type: DELETE_TASK_SUCCESS,
        todolistId,
        taskId
    };
};
export const deleteTaskError = (error: string): DeleteTaskErrorActionType => {
    return {type: DELETE_TASK_ERROR, error};
};
export const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingActionType => {
    return {type: TOGGLE_IS_LOADING, isLoading: isLoading};
};
export const toggleIsLoadingList = (isLoading: boolean): ToggleIsLoadingListActionType => {
    return {type: TOGGLE_IS_LOADING_LIST, isLoading: isLoading};
};

// Thunk

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

export const setToDoLists = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    await api.getTodolists()
        .then(res => {
            dispatch(setToDoListsSuccess(res));
        })
        .catch(res => {
            dispatch(setToDoListsError(res));
        });
    dispatch(toggleIsLoading(false));
};

export const setTasks = (idList: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoadingList(true));
    await api.getTasks(idList)
        .then(res => {
            dispatch(setTasksSuccess(idList, res.items));
        })
        .catch(res => {
            dispatch(setTasksError(res));
        });
    dispatch(toggleIsLoadingList(false));
};

export const addToDoList = (title: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    await api.createTodolist(title)
        .then(res => {
            let todolist = res.data.item;
            dispatch(addToDoListSuccess(todolist));
            dispatch(addToDoListError(''));
        })
        .catch(res => {
            dispatch(addToDoListError(res));
        });
    dispatch(toggleIsLoading(false));
};

export const addTask = (newText: string, idList: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    let newTaskId = '';
    await api.createTask(newText, idList)
        .then(res => {
            dispatch(addTaskSuccess(idList, res.data.item));
            dispatch(addTaskError(''));
            newTaskId = res.data.item.id;
        })
        .catch(res => {
            dispatch(addTaskError(res));
        });
    dispatch(toggleIsLoading(false));
    return newTaskId;
};

export const updateToDoList = (idList: string, newListTitle: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    await api.updateTodolist(idList, newListTitle)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(updateToDoListSuccess(idList, newListTitle));
                dispatch(updateToDoListError(''));
            }
        })
        .catch(res => {
            dispatch(updateToDoListError(res));
        });
    dispatch(toggleIsLoading(false));
};

export const updateTask = (newTask: TaskType): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    await api.updateTask(newTask)
        .then(res => {
            dispatch(updateTaskSuccess(res.data.item));
            dispatch(updateTaskError(''));
        })
        .catch(res => {
            dispatch(updateTaskError(res));
        });
    dispatch(toggleIsLoading(false));
};

export const deleteToDoList = (idList: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    await api.deleteTodolist(idList)
        .then(() => {
            dispatch(deleteToDoListSuccess(idList));
            dispatch(deleteToDoListError(''));
        })
        .catch(res => {
            dispatch(deleteToDoListError(res));
        });
    dispatch(toggleIsLoading(false));
};

export const deleteTask = (idList: string, taskId: string): ThunkType => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsLoading(true));
    await api.deleteTask(idList, taskId)
        .then(() => {
            dispatch(deleteTaskSuccess(idList, taskId));
            dispatch(deleteTaskError(''));
        })
        .catch(res => {
            dispatch(deleteTaskError(res));
        });
    dispatch(toggleIsLoading(false));
};

export const reorderList = (todolistId: string, putAfterItemId: string): ThunkType =>
    async (dispatch: ThunkDispatchType) => {
        dispatch(toggleIsLoading(true));
        await api.reorderList(todolistId, putAfterItemId)
            .then(() => {
                dispatch(setToDoLists());
                dispatch(setToDoListsError(''));
            })
            .catch(res => {
                dispatch(setToDoListsError(res));
            });
        dispatch(toggleIsLoading(false));
    };

export const reorderTask = (todolistId: string, taskId: string, putAfterItemId: string): ThunkType =>
    async (dispatch: ThunkDispatchType) => {
        dispatch(toggleIsLoading(true));
        await api.reorderTask(todolistId, taskId, putAfterItemId)
            .then(() => {
                dispatch(setTasks(todolistId));
                dispatch(setTasksError(''));
            })
            .catch(res => {
                dispatch(setTasksError(res));
            });
        dispatch(toggleIsLoading(false));
    };


