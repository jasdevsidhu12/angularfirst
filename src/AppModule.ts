import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './component/AppComponent';
import { CarComponent } from './component/CarComponent';
import { PassModelComponent } from './component/PassModelComponent';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CarComponent, PassModelComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
