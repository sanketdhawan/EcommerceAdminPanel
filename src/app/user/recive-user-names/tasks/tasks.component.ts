import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() filteredTasks!: Task;
}
