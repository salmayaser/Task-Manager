import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnteredTask, Task } from '../shared/interfaces/task.model';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  handleCancelClicked = output();
  handleCreateClicked = output<EnteredTask>();
  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.handleCancelClicked.emit();
  }
  onCreate() {
    this.onCancel();
    this.handleCreateClicked.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }
}
