import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './component/AppComponent';
import { CarComponent } from './component/CarComponent';
import { PassModelComponent } from './component/PassModelComponent';
import { PlaneComponent } from './component/plane/PlaneComponent';
import { MyVehicleComponent } from './component/MyVehicleComponent';
import { VechileService } from './service/VechicleService';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, CarComponent, PassModelComponent, MyVehicleComponent, PlaneComponent],
  providers: [VechileService],
  bootstrap: [AppComponent]
})

export class AppModule {}
