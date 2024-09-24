import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recive-user-names',
  standalone: true,
  imports: [],
  templateUrl: './recive-user-names.component.html',
  styleUrl: './recive-user-names.component.scss',
})
export class ReciveUserNamesComponent {
  // @Input({ required: true }) nameSend!: String;

  nameSend = input<string>();

}
