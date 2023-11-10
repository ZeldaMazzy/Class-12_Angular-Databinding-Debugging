import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
  isAuthenticated: boolean = false;

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.auth.currentUser.subscribe({
      next: user => this.isAuthenticated = !!user
    })
  }

  public signOut(): void {
    this.auth.signOut();
  }
}
