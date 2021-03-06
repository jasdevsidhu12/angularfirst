import { Component } from '@angular/core';
import { CarComponent } from './CarComponent';
@Component({
  selector: 'my-app',
  template: ` <pre> {{app | json}}</pre>
              <h1>{{app.title}}</h1>
              {{ displayDom() }}
              <div [style.color]='color'>Name is {{app.name}}</div>
              <br />
              What do you want to see,
              <a  href="" [routerLink]="['car']">
                Cars
              </a> or
              <a href="" [routerLink]="['language']">
                Programing Languages
              </a>
              or
              <a href="" [routerLink]="['student']">
                School Own Module
              </a>
              <main>
                <section>
                  <router-outlet></router-outlet>
                </section>
              </main>
            `
})
export class AppComponent {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
  displayDom() {
    return `<h1>Hans Solo Rocks</h1>`;
  }
};
