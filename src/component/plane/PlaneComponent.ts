import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlaneModel } from '../../model/PlaneModel';
@Component({
  selector: 'my-plane',
  template: `<br />
            <br />
            <div (click)=selectPlaneModel()>{{ plane.name }}</div>
            `
})
export class PlaneComponent {
  // @Input() plane: PlaneModel;
  // constructor(plane = new PlaneModel('Boeing 747')) { }
  @Output() changePlane = new EventEmitter<PlaneModel>();
  plane = new PlaneModel('Boeing 747');

  selectPlaneModel() {
    console.log('in function');
    console.log(this.plane)
    this.changePlane.emit(this.plane);
  }

  fromParent() {
    alert('from parent');
  }
};
