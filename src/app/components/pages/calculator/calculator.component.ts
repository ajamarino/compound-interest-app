import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomInputComponent } from '../../custom-input/custom-input.component';
import { ICustomInput } from '../../../interfaces/Icustom-input';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, CustomInputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.sass'
})
export class CalculatorComponent {

  initialValueInput: ICustomInput = {
    label: 'Initial Value',
    prefix: 'R$',
    placeholder: '00.00',
    hasOptions: false
  }

  monthlyValueInput: ICustomInput = {
    label: 'Monthly Value',
    prefix: 'R$',
    placeholder: '00.00',
    hasOptions: false
  }

  interestRateInput: ICustomInput = {
    label: 'Interest Rate',
    prefix: '%',
    placeholder: '00.00',
    hasOptions: true
  }

  periodInput: ICustomInput = {
    label: 'Period',
    prefix: '',
    placeholder: '1',
    hasOptions: true
  }

}
