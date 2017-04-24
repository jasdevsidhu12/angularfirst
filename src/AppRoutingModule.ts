import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteLanguage } from './component/FavouriteLanguage';
import { CarComponent } from './component/CarComponent';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'language'},
  {path: 'language', component: FavouriteLanguage },
  { path: 'car', component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};

export const routableComponents = [ FavouriteLanguage, CarComponent ];
