import { Component } from '@angular/core';
import { PassModelComponent } from './PassModelComponent';
@Component({
  selector: 'car',
  template: `<ul>
              <li *ngFor='let v of vechiles'>
                {{v.name}}
              </li>
              </ul>
              <div>
                last name is {{name.last}} <br />
                first name is {{name.first}} <br />
                <input [(ngModel)]="name.last">
              </div>
              <button (click)="clickElem()">Change to GoodBoy</button>
              <div *ngIf='vechiles.length'>
                The total vechiles I like is {{vechiles.length}}
              </div>
              <div>
                <pass-model [name]="name"></pass-model>
              </div>`
})
export class CarComponent {
  vechiles = [{name: 'Austin Martin'}, {name: 'BMW'}];
  name = {first: 'Jasdev', last: 'sidhu'};
  clickElem() {
    this.name.last = 'Good Boy';
  }
};
