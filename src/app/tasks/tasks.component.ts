import { Component, input, OnChanges, output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from './dummy-tasks';
import { Task } from '../shared/interfaces/task.model';
import { AddNewTaskComponent } from '../add-new-task/add-new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnChanges {
  name = input.required<string>();
  id = input.required<string>();
  tasks = dummyTasks;
  userTasks: Task[] = [];
  showAddNewTask = false;

  ngOnChanges(): void {
    this.userTasks = this.tasks.filter((task) => task.userId == this.id());
  }

  handleCompleteClicked(taskId: string) {
    this.userTasks = this.userTasks.filter((task) => task.id !== taskId);
  }
  onAddNewTaskClicked() {
    this.showAddNewTask = true;
  }
  closeDialog() {
    this.showAddNewTask = false;
  }
}
