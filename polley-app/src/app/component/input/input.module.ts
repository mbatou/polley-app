import { IonicModule } from '@ionic/angular';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, IonicModule],
    exports:[InputComponent],
})
export class InputModule {}