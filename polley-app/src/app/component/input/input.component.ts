import { Component, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { InputModule } from './input.module';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: string;
  @Input() placeholder: string;

  constructor() {
    this.type = 'text';
    this.placeholder = '';
  }
}

// export class InputComponent {
//   @Input() type?: string;
//   @Input() placeholder?: string;

//   constructor() {}
// }
