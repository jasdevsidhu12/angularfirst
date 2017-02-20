import { Component, Input } from '@angular/core';

@Component({
  selector: 'pass-model',
  template: `<br />
            <h1>Pass Model</h1>
            <div (click)="clickElem()">
              First Name {{ name.first }}
            </div>`
})
export class PassModelComponent{
  @Input() name: any;
  clickElem() {
    this.name.first ="Manjeet";
  }
};
