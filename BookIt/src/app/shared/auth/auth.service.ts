import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from './auth-response.model';
import { User } from '../user/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginURL: string = environment.firebaseLoginURL + environment.API_KEY;
  private readonly signupURL: string = environment.firebaseSignupURL + environment.API_KEY;

  public currentUser: BehaviorSubject<User | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) {}

  public signUp(email: string, password: string): Observable<AuthResponse> {
    const request: any = {
        email,
        password,
        returnSecureToken: true
    }

    return this.http.post<AuthResponse>(this.signupURL, request)
      .pipe(
        tap(authResponse => this.handleAuth(authResponse))
      );
  }

  public logIn(email: string, password: string): Observable<AuthResponse> {
    const request: any = {
      email,
      password,
      returnSecureToken: true
    }

    return this.http.post<AuthResponse>(this.loginURL, request)
      .pipe(
        tap(authResponse => this.handleAuth(authResponse))
      );
  }

  public signOut(): void {
    this.currentUser.next(null);
    this.router.navigate(["authentication"]);
  }

  public getUserDataFromStorage(): AuthResponse | undefined {
    return JSON.parse(localStorage.getItem("userData"))
  }

  public getAccessTokenFromStorage(): string {
    if(!localStorage.getItem("userData")) return "";
    const data = JSON.parse(localStorage.getItem("userData"));

    return data.accessToken;
  }

  public handleAuth(authResponse: AuthResponse): void {
    const {email, localId, idToken} = authResponse
    const expiresIn: number = Date.now() + +authResponse.expiresIn;

    // Create a new user based on the info passed in the form and emit that user
    const formUser = new User(email, localId, idToken, +expiresIn);
    this.currentUser.next(formUser);
    console.trace()

    // Save the new user in localStorage
    localStorage.setItem("userData", JSON.stringify(formUser));
  }
}
