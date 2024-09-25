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
interface User{
  id: string;
  name: string;
  avatar: string;
 }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})


export class UserComponent {
  // users = DUMMY_USERS[randomIndex];

  
@Input() User!:User;

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
    return 'assets/users/' + this.User.avatar;
  }

  onclickUsers() {
    this.selectUser.emit(this.User.id);
  }
}
