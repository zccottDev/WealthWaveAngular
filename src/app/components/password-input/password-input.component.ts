import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MeterialModule } from 'src/Meterial.Module';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [MeterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input() label: string = 'Password';
  @Input() controlName: string = '';
  @Input() placeholder: string = 'Enter password';
  @Input() formGroup!: FormGroup;
  @Input() maxLength: number = 50; // Longer maxLength for passwords

  showPassword: boolean = false;

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.slice(0, this.maxLength);
    this.control.setValue(value);
  }

  onBlur(): void {
    this.control.setValue(this.control.value?.trim());
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}