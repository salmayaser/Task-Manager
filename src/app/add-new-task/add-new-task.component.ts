import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  private tasksService = inject(TasksService);
  handleCancelClicked = output();
  userId = input.required<string>();
  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.handleCancelClicked.emit();
  }
  onCreate() {
    this.onCancel();
    this.tasksService.addNewTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId()
    );
  }
}
