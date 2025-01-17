import { Component, inject, input, OnChanges, output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddNewTaskComponent } from '../add-new-task/add-new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasksService = inject(TasksService);
  name = input.required<string>();
  id = input.required<string>();
  showAddNewTask = false;

  handleCompleteClicked(taskId: string) {
    this.tasksService.deleteTask(taskId);
  }
  onAddNewTaskClicked() {
    this.showAddNewTask = true;
  }
  closeDialog() {
    this.showAddNewTask = false;
  }

  get userTasks() {
    return this.tasksService.getUserTasks(this.id());
  }
}
