import { Component, Input } from '@angular/core';
import { dummyTasks } from '../../../data/userdata/users';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  tasks = dummyTasks;

  @Input() task!: string;
  @Input() userId!: string;


  ngAfterViewChecked(): void {
    console.log(this.task)
  }

}
