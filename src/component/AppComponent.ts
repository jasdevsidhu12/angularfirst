import { Component } from '@angular/core';
import { CarComponent } from './CarComponent';
@Component({
  selector: 'my-app',
  template: `<h1>{{app.title}}</h1>
              <div [style.color]='color'>Name is {{app.name}}</div>
              <br />
              <h2>The following are my favourite cars</h2>
              <car></car>`,
})
export class AppComponent {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
};
