import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { dummyTasks } from '../../data/userdata/users';

@Component({
  selector: 'app-recive-user-names',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './recive-user-names.component.html',
  styleUrl: './recive-user-names.component.scss',
})
export class ReciveUserNamesComponent {
  @Input({ required: true }) userId!: String;

  nameSend = input<string>();

  tasks: any[] = dummyTasks;

  get selectedUsersTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
