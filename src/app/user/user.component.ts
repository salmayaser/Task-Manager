import { Component, computed, input, output } from '@angular/core';
import { User } from '../shared/interfaces/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() handleUserClicked = new EventEmitter<string>();

  //signal inputs
  user = input.required<User>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  handleUserClicked = output<string>();

  onUserClicked() {
    this.handleUserClicked.emit(this.user().id);
  }
}
