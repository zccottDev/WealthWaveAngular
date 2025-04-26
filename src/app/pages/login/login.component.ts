import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, TextInputComponent, PasswordInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    // Initialize any data or perform actions when the component is loaded
  }

  onLogin(): void {
    // Handle login logic here
  }

  onRegister(): void {
    // Handle registration logic here
  }
}
