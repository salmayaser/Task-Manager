import { Component, inject, input } from '@angular/core';
import { Task } from '../shared/interfaces/task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../shared/components/card/card.component';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  task = input<Task>();

  onCompleteClicked() {
    this.tasksService.deleteTask(this.task()!.id);
  }
}
