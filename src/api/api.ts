import axios from "axios";
import {TaskType, TodoType} from "../types/entities";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'} //my
    // headers: {'API-KEY': '421593e8-55e9-4a16-9adc-2959bf4b1754'} //test
});

type CommonApiType<T> = {
    resultCode: 0 | 1 | 100
    messages: Array<string>
    data: T
}

type GetTasksType = {
    items: Array<TaskType>
    totalCount: number
    error: string
}

export const api = {
    getTodolists() {
        return instance.get<Array<TodoType>>('').then(res => res.data);
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksType>(`${todolistId}/tasks`).then(res => res.data);
    },
    createTodolist(title: string) {
        return instance.post<CommonApiType<{ item: TodoType }>>('', {title}).then(res => res.data);
    },
    createTask(newTaskTitle: string, todolistId: string) {
        return instance.post<CommonApiType<{ item: TaskType }>>(`${todolistId}/tasks`, {title: newTaskTitle})
            .then(res => res.data);
    },
    updateTodolist(todolistId: string, newListTitle: string) {
        return instance.put(`${todolistId}`, {title: newListTitle}).then(res => res.data);
    },
    updateTask(task: TaskType) {
        return instance.put<CommonApiType<{ item: TaskType }>>(`${task.todoListId}/tasks/${task.id}`, task)
            .then(res => res.data);
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<CommonApiType<{}>>(`${todolistId}`).then(res => res.data);
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<CommonApiType<{}>>(`${todolistId}/tasks/${taskId}`).then(res => res.data);
    },
    reorderTask(todolistId: string, taskId: string, putAfterItemId: string) {
        return instance.put(`${todolistId}/tasks/${taskId}/reorder`,
            {putAfterItemId: putAfterItemId}).then(res => res.data);
    }

};