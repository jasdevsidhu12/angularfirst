import { Component } from '@angular/core';

@Component({
  selector: 'student',
  template: `<h2>Student name is {{ name }}</h2>`
})

export class Student {
  constructor(private name: String) {
    name = 'Jasdev';
  }
}
