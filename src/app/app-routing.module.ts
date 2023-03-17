import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickMortyComponent } from './modules/rick-morty/rick-morty.component';

const routes: Routes = [
  { path: '', component: RickMortyComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
