import { Component, Input } from '@angular/core';
import { MyVehicleComponent } from './MyVehicleComponent';

@Component({
  selector: 'pass-model',
  template: `<br />
            <h1>Pass Model. Please click at {{ name.first }} below</h1>
            <div (click)="clickElem()">
              First Name {{ name.first }}
            </div>
            <my-vehicles></my-vehicles>`
})
export class PassModelComponent{
  @Input() name: any;
  clickElem() {
    this.name.first ="Manjeet";
  }
};
