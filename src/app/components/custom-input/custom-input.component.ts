import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ICustomInput } from '../../interfaces/Icustom-input';


@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.sass'
})
export class CustomInputComponent {

  @Input() customInput!: ICustomInput;

  ngOnInit() {
    console.log(this.customInput);
  }

}
