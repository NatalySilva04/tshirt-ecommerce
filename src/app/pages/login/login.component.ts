import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  emailError: string = "";
  passwordError: string = "";

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
}

updateEmailErrorMessage() {
  if (this.loginForm.controls["email"].hasError('required')) {
    this.emailError = 'Campo e-mail deve ser preenchido';
    } else if (this.loginForm.controls["email"].hasError('email')) {
      this.emailError = 'E-mail inválido';
    } else {
      this.emailError = '';
    }
}
submitForm() {
  console.log("Cliquei no botão do forms!");
  if (this.loginForm.valid) {
    const loggedIn = this.authService.loginUser(this.loginForm.value);

    if (!loggedIn) {
      this.snackBar.open(
        "Não foi possível logar. Tente novamente com credenciais válidas!",
        "Close",
        {
          horizontalPosition: "end",
          verticalPosition: "top",
          duration: 5000,
        }
      )
    }
  }
}
}