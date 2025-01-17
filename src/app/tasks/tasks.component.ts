import { Component, input, OnChanges, output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from './dummy-tasks';
import { EnteredTask, Task } from '../shared/interfaces/task.model';
import { AddNewTaskComponent } from '../add-new-task/add-new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  id = input.required<string>();
  tasks = dummyTasks;
  showAddNewTask = false;

  handleCompleteClicked(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  onAddNewTaskClicked() {
    this.showAddNewTask = true;
  }
  closeDialog() {
    this.showAddNewTask = false;
  }
  addNewTask(task: EnteredTask) {
    this.tasks.push({
      ...task,
      id: `t${this.tasks.length + 1}`,
      userId: this.id(),
    });
  }

  get userTasks() {
    return this.tasks.filter((task) => task.userId == this.id());
  }
}
