import { Component, computed, Input, input, output } from '@angular/core';
import { User } from '../shared/interfaces/user.model';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() handleUserClicked = new EventEmitter<string>();

  //signal inputs
  user = input.required<User>();
  isActive = input(false);

  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  handleUserClicked = output<string>();

  onUserClicked() {
    this.handleUserClicked.emit(this.user().id);
  }
}
