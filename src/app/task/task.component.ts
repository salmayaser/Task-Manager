import { Component, input, output } from '@angular/core';
import { Task } from '../shared/interfaces/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input<Task>();
  handleCompleteClicked = output<string>();

  onCompleteClicked() {
    this.handleCompleteClicked.emit(this.task()!.id);
  }
}
