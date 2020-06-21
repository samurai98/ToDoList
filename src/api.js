import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'}
});


export const api = {
    getTodolists() {
        return instance.get('').then(res => res.data);
    },
    getTasks(todolistId) {
        return instance.get(`${todolistId}/tasks`).then(res => res.data);
    },
    createTodolist(title) {
        return instance.post('', {title}).then(res => res.data);
    },
    createTask(newTaskTitle, todolistId) {
        return instance.post(`${todolistId}/tasks`, {title: newTaskTitle}).then(res => res.data);
    },
    updateTodolist(todolistId, newListTitle) {
        return instance.put(`${todolistId}`, {title: newListTitle}).then(res => res.data);
    },
    updateTask(task) {
        return instance.put(`${task.todoListId}/tasks/${task.id}`, task).then(res => res.data);
    },
    deleteTodolist(todolistId) {
        return instance.delete(`${todolistId}`).then(res => res.data);
    },
    deleteTask(todolistId, taskId) {
        return instance.delete(`${todolistId}/tasks/${taskId}`).then(res => res.data);
    },

};