import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchoolRoutingModule, schoolRoutableComponents } from './SchoolRoutingModule';

@NgModule({
  imports: [BrowserModule, SchoolRoutingModule],
  declarations: [schoolRoutableComponents]
})

export class SchoolMainModule {}
