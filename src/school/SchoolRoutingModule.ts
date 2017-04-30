import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Student } from './component/Student';

const routes: Routes = [
  /*{path: '', pathMatch: 'full', redirectTo: 'student'},*/
  { path: 'student', component: Student }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {};

export const schoolRoutableComponents = [ Student ];
