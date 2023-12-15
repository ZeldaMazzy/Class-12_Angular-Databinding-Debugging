import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode: boolean = true;
  errorMessage: string = "";

  constructor(private auth: AuthService, private router: Router) {}

  onAuthFormSubmit(form: FormGroup): void {
    if(form.invalid) return;

    let authObservable = new Observable()
    const email: string = form.value.email;
    const password: string = form.value.password;

    if(this.isLoginMode){
      authObservable = this.auth.logIn(email, password)
    }
    else {
      authObservable = this.auth.signUp(email, password)
    }

    authObservable.subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(["bookshelf"])
      },
      error: err => {
        const code: number = err.error.error.code;
        if(code == 400 && this.isLoginMode) {
          this.errorMessage = "Invalid login credentials";
        } 
        else if (code == 400 && this.isLoginMode == false) {
          this.errorMessage = "This email has already been registered";
        }
        console.error("There was an error authenticating: ", err.error);
        form.reset();
      }
    })
    
  }

}
