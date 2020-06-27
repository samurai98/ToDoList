import {api} from "./api";

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

const initialState = {
    todolists: []
};

export const reducer = (state = initialState, action) => {
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
                ...state, error: 'error'
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
                ...state, error: 'error'
            };

        case ADD_TODOLIST_SUCCESS:
            return {...state, todolists: [...state.todolists, action.newToDoList]};
        case ADD_TODOLIST_ERROR:
            return {...state, error: 'error'};

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
            return {...state, error: 'error'};

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
            return {...state, error: 'error'};

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
            return {...state, error: 'error'};

        case DELETE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.filter(todo => todo.id !== action.todolistId)
            };
        case DELETE_TODOLIST_ERROR:
            return {...state, error: 'error'};

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
            return {...state, error: 'error'};

        default:
            return state;
    }
};

export const setToDoListsSuccess = (todolists) => {
    return {
        type: SET_TODOLISTS_SUCCESS,
        todolists
    };
};
export const setToDoListsError = () => {
    return {type: SET_TODOLISTS_ERROR};
};

export const setTasksSuccess = (todolistId, tasks) => {
    return {
        type: SET_TASKS_SUCCESS,
        todolistId,
        tasks
    };
};
export const setTasksError = () => {
    return {type: SET_TASKS_ERROR};
};

export const addToDoListSuccess = (newToDoList) => {
    return {
        type: ADD_TODOLIST_SUCCESS,
        newToDoList
    }
};
export const addToDoListError = () => {
    return {type: ADD_TODOLIST_ERROR};
};

export const addTaskSuccess = (todolistId, newTask) => {
    return {
        type: ADD_TASK_SUCCESS,
        todolistId,
        newTask
    };
};
export const addTaskError = () => {
    return {type: ADD_TASK_ERROR};
};

export const updateToDoListSuccess = (todoListId, newTitle) => {
    return {type: UPDATE_TODOLIST_SUCCESS, todoListId, newTitle};
};
export const updateToDoListError = () => {
    return {type: UPDATE_TODOLIST_ERROR};
};

export const updateTaskSuccess = (task) => {
    return {type: UPDATE_TASK_SUCCESS, task};
};
export const updateTaskError = () => {
    return {type: UPDATE_TASK_ERROR};
};

export const deleteToDoListSuccess = (todolistId) => {
    return {
        type: DELETE_TODOLIST_SUCCESS,
        todolistId
    };
};
export const deleteToDoListError = () => {
    return {type: DELETE_TODOLIST_ERROR};
};

export const deleteTaskSuccess = (todolistId, taskId) => {
    return {
        type: DELETE_TASK_SUCCESS,
        todolistId,
        taskId
    };
};
export const deleteTaskError = () => {
    return {type: DELETE_TASK_ERROR};
};

// Thunk

export const setToDoLists = () => (dispatch, getState) => {
    api.getTodolists()
        .then(res => {
            dispatch(setToDoListsSuccess(res))
        })
        .catch((error) => {
            dispatch(setToDoListsError(error))
        })
};

export const setTasks = (idList) => (dispatch) => {
    api.getTasks(idList)
        .then(res => {
            dispatch(setTasksSuccess(idList, res.items))
        })
        .catch((error) => {
            dispatch(setTasksError(error))
        })
};

export const addToDoList = (title) => (dispatch) => {
    api.createTodolist(title)
        .then(res => {
            let todolist = res.data.item;
            dispatch(addToDoListSuccess(todolist));
        })
        .catch((error) => {
            dispatch(addToDoListError(error))
        })
};

export const addTask = (newText, idList) => (dispatch) => {
    api.createTask(newText, idList)
        .then(res => {
            dispatch(addTaskSuccess(idList, res.data.item))
        })
        .catch((error) => {
            dispatch(addTaskError(error))
        })
};

export const updateToDoList = (idList, newListTitle) => (dispatch) => {
    api.updateTodolist(idList, newListTitle)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(updateToDoListSuccess(idList, newListTitle));
            }
        })
        .catch((error) => {
            dispatch(updateToDoListError(error))
        })
};

export const updateTask = (newTask) => (dispatch) => {
    api.updateTask(newTask)
        .then(res => {
            dispatch(updateTaskSuccess(res.data.item))
        })
        .catch((error) => {
            dispatch(updateTaskError(error))
        })
};

export const deleteToDoList = (idList) => (dispatch, getState) => {
    api.deleteTodolist(idList)
        .then(res => {
            dispatch(deleteToDoListSuccess(idList))
        })
        .catch((error) => {
            dispatch(deleteToDoListError(error))
        })
};

export const deleteTask = (idList, taskId) => (dispatch, getState) => {
    api.deleteTask(idList, taskId)
        .then(res => {
            dispatch(deleteTaskSuccess(idList, taskId));
        })
        .catch((error) => {
            dispatch(deleteTaskError(error))
        })
};


