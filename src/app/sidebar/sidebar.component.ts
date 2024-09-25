import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SidebarItem, SIDEBAR_MENU } from '../data/data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})




export class SidebarComponent {


  menuItems: SidebarItem[] = SIDEBAR_MENU;

  @Input() name!:string;
child: any;



}
