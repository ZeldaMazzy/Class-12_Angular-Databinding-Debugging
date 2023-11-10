import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt';
  currentPage: string = "bookshelf";

  constructor(private auth: AuthService) {
    // if(!auth.getUserDataFromStorage()) return;
    // const data: AuthResponse = auth.getUserDataFromStorage();
    // if(auth.getAccessTokenFromStorage().length > 0) {
    //   auth.handleAuth(data)
    // }
  }
}
