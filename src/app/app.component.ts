import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ApisService } from './services/apis.service';
import { filter, map } from 'rxjs';
import { SidebarItem, SIDEBAR_MENU } from './data/data';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, nameX } from './data/userdata/users';
import { FooterComponent } from './footer/footer.component';
import { ReciveUserNamesComponent } from './user/recive-user-names/recive-user-names.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    UserComponent,
    FooterComponent,
    ReciveUserNamesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';

  users = DUMMY_USERS;
  namex = nameX;

  selectedUserId = 'u1';
  stringName = 'Dhawan';

  data: SidebarItem[] = SIDEBAR_MENU;

  textName: string = '';


  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // console.log(id)
    this.selectedUserId = id;
  }

  constructor(private httpService: ApisService) {}

  ngOnInit(): void {
    this.httpService
      .getUsers()
      .pipe(
        filter((posts) => posts.length > 0),
        map((posts: any) =>
          posts.filter((item: any) => item.title.toLowerCase().startsWith('s'))
        )
      )
      .subscribe({
        next: (data) => {
          // console.log(data);
        },
      });
  }
}
