import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './component/AppComponent';
import { PassModelComponent } from './component/PassModelComponent';
import { PlaneComponent } from './component/plane/PlaneComponent';
import { MyVehicleComponent } from './component/MyVehicleComponent';
import { VechileService } from './service/VechicleService';

// other module
import { SchoolMainModule } from './school/SchoolMainModule';
// import router
import { AppRoutingModule, routableComponents } from './AppRoutingModule';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, SchoolMainModule],
  declarations: [AppComponent, PassModelComponent, MyVehicleComponent, PlaneComponent, routableComponents],
  providers: [VechileService],
  bootstrap: [AppComponent]
})

export class AppModule {}
