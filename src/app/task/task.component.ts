import { Component, input, output } from '@angular/core';
import { Task } from '../shared/interfaces/task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
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
