import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { HowToUseComponent } from './components/pages/how-to-use/how-to-use.component';

export const routes: Routes = [
  { path: '', component: CalculatorComponent,},
  {path: 'how-to-use', component: HowToUseComponent}
];
