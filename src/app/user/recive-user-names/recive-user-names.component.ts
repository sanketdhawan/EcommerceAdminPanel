import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-recive-user-names',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './recive-user-names.component.html',
  styleUrl: './recive-user-names.component.scss',
})
export class ReciveUserNamesComponent {
  // @Input({ required: true }) nameSend!: String;

  nameSend = input<string>();

}
