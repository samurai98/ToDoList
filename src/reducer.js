export const ADD_TODOLIST = 'TodoAPP/Todolist/ADD-TODOLIST';
export const DELETE_TODOLIST = 'TodoAPP/Todolist/DELETE-TODOLIST';
export const DELETE_TASK = 'TodoAPP/Todolist/DELETE-TASK';
export const ADD_TASK = 'TodoAPP/Todolist/ADD-TASK';
export const UPDATE_TASK = 'TodoAPP/Todolist/UPDATE-TASK';
export const SET_TODOLISTS = 'TodoAPP/Todolist/SET-TODOLISTS';
export const SET_TASKS = 'TodoAPP/Todolist/SET-TASKS';

const initialState = {
    todolists: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {...state, todolists: [...state.todolists, action.newToDoList]};
        case ADD_TASK:
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
        case UPDATE_TASK:
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
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(todo => todo.id !== action.todolistId)
            };
        case DELETE_TASK:
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
        case SET_TODOLISTS:
            return {
                ...state,
                todolists: action.todolists.map(todolist => {
                    return {...todolist, tasks: []}
                })
            };
        case SET_TASKS:
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
        default:
            return state;
    }
};

export const addToDoListAC = (newToDoList) => {
    return {
        type: ADD_TODOLIST,
        newToDoList
    }
};

export const addTaskAC = (todolistId, newTask) => {
    return {
        type: ADD_TASK,
        todolistId,
        newTask
    };
};

export const deleteToDoListAC = (todolistId) => {
    return {
        type: DELETE_TODOLIST,
        todolistId
    };
};

export const deleteTaskAC = (todolistId, taskId) => {
    return {
        type: DELETE_TASK,
        todolistId,
        taskId
    };
};

export const updateTaskAC = (task) => {
    return {type: UPDATE_TASK, task};
};

export const setToDoListsAC = (todolists) => {
    return {
        type: SET_TODOLISTS,
        todolists
    };
};

export const setTasksAC = (todolistId, tasks) => {
    return {
        type: SET_TASKS,
        todolistId,
        tasks
    };
};
