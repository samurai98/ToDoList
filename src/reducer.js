export const ADD_TODOLIST = 'TodoAPP/Todolist/ADD-TODOLIST';
export const DELETE_TODOLIST = 'TodoAPP/Todolist/DELETE-TODOLIST';
export const DELETE_TASK = 'TodoAPP/Todolist/DELETE-TASK';
export const ADD_TASK = 'TodoAPP/Todolist/ADD-TASK';
export const UPDATE_TASK = 'TodoAPP/Todolist/UPDATE-TASK';

const initialState = {
    todolists: [
        {
            "id": 0, "title": "AA", "tasks": [
                {"id": 0, "title": "vladж", "isDone": false, "priority": "low"},
                {"id": 1, "title": "todo2", "isDone": true, "priority": "low"}
            ]
        },
        {
            "id": 1, "title": "BB", "tasks": [
                {"id": 0, "title": "vlad222", "isDone": false, "priority": "low"},
                {"id": 1, "title": "todo333", "isDone": true, "priority": "low"}
            ]
        }
    ]
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {...state, todolists: [...state.todolists, action.newToDoList]};
        case ADD_TASK:
            return {
                ...state, todolists: state.todolists.map(todo => {
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
                    if (todo.id !== action.todolistId) {
                        return todo
                    } else {
                        return {
                            ...todo,
                            tasks: todo.tasks.map(task => {
                                if (task.id !== action.taskId) {
                                    return task
                                } else {
                                    return {...task, ...action.obj}
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

export const updateTaskAC = (todolistId, taskId, obj) => {
    return {
        type: UPDATE_TASK,
        todolistId,
        taskId,
        obj
    };
};


