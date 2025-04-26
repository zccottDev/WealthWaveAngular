import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MeterialModule } from 'src/Meterial.Module';

@Component({
  selector: 'app-text-input',
  imports: [MeterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {

  @Input() label: string = '';
  @Input() controlName: string = '';
  @Input() placeholder: string = ''; 
  @Input() formGroup!: FormGroup;
  @Input() maxLength: number = 30; 

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
}
