import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  handleCancelClicked = output();

  onCancel() {
    this.handleCancelClicked.emit();
  }
}
