import {createStore} from 'redux';

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

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'CREATE_TODOLIST':
                return {...state, todolists: [...state.todolists, action.newToDoList]};
            case 'ADD_TASK':
                return {
                    ...state, todolists: state.todolists.map(todo => {
                        if (todo.id !== action.todolistId) {
                            return todo
                        } else {
                            return {...todo, tasks: [...todo.tasks, action.newTask]}
                        }
                    })
                };
            case 'CHANGE_TASK':
                return {
                    ...state, todolists: state.todolists.map(todo => {
                        if (todo.id !== action.todolistId) {
                            return todo
                        } else {
                            return {
                                ...todo, tasks: todo.tasks.map(task => {
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
            case 'DELETE_TODOLIST':
                return {
                    ...state,
                    todolists: state.todolists.filter(todo => todo.id !== action.todolistId)
                };
            case 'DELETE_TASK':
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
    }
;


const store = createStore(reducer);
export default store;