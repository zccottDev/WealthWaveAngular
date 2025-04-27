import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';
import { TextInputComponent } from 'src/app/components/text-input/text-input.component';
import { MeterialModule } from 'src/Meterial.Module';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, TextInputComponent, PasswordInputComponent, MeterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  isLogin: boolean = true;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ],],
    });
  }

  switchIsLogin(): void {
    this.isLogin = !this.isLogin;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      if(this.isLogin){
        this.onLogin();
      }
      else{
        this.onRegister();
      }
    } else {
      this.loginForm.markAllAsTouched(); 
    }
  }

  onLogin(): void {
    console.log('Login', this.loginForm.value);
  }
  onRegister(): void {
    console.log('Register', this.loginForm.value);
  }
}
