import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output
} from '@angular/core';
// import { DUMMY_USERS } from '../data/users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // users = DUMMY_USERS[randomIndex];

  @Input() id!: string;
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() nameX!: string;

  @Output() selectUser = new EventEmitter<string>();


  @Output() ReciveName = new EventEmitter<string>();

  // selectUser = output<string>();

  // Signals
  // name = input.required<string>();
  // avatar = input.required<string>();
  // nameX = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onclickUsers() {
    this.selectUser.emit(this.id);
  }
}
