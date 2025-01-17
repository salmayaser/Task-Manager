import { Injectable } from '@angular/core';
import { EnteredTask, Task } from '../shared/interfaces/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = [];
  constructor() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) this.tasks = JSON.parse(tasks);
  }

  addNewTask(task: EnteredTask, userId: string) {
    this.tasks.push({
      ...task,
      id: `t${this.tasks.length + 1}`,
      userId: userId,
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  get getTasks() {
    return this.tasks;
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId == userId);
  }
}
