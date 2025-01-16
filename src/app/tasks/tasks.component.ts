import { Component, computed, input, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from './dummy-tasks';
import { Task } from '../shared/interfaces/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  id = input.required<string>();
  tasks = dummyTasks;
  userTasks = computed(() =>
    this.tasks.filter((task) => task.userId == this.id())
  );
}
