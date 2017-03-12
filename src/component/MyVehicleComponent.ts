import { Component, Input, ViewChild } from '@angular/core';
import { VechileService } from '../service/VechicleService'
import { PlaneComponent } from './plane/PlaneComponent';
@Component({
  selector: 'my-vehicles',
  template: `<br />
                <div *ngFor='let v of vehicles' (click)='selectedVechicle(v)'>
                {{ v.name }}
              </div>
              <br />
              <my-plane (changePlane)=planeSelect($event)></my-plane>
            `
})
export class MyVehicleComponent{
  @ViewChild(PlaneComponent) planeComp: PlaneComponent;
  vehicles = this.vehicleService.getVehicle();
  constructor(private vehicleService: VechileService){
    console.log(vehicleService.getVehicle());
    vehicleService.getAjaxVechileService().subscribe((data)=>{});
  }

  selectedVechicle(vechicle: any) {
    alert('vechile choosen ' + vechicle.name);
  }

  planeSelect(plane: any) {
    alert(plane.name);
    this.planeComp.fromParent();
  }
};
