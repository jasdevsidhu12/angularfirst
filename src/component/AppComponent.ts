import { Component } from '@angular/core';
import { CarComponent } from './CarComponent';
@Component({
  selector: 'my-app',
  template: ` <pre> {{app | json}}</pre>
              <h1>{{app.title}}</h1>
              {{ displayDom() }}
              <div [style.color]='color'>Name is {{app.name}}</div>
              <br />
              <h2 [ngClass]="{active: true}">The following are my favourite cars</h2>
              <car></car>`
})
export class AppComponent {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
  displayDom() {
    return `<h1>Hans Solo Rocks</h1>`;
  }
};
