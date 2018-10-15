import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessComponent } from './process/process.component';
const routes: Routes = [
  {path: '' ,redirectTo: '/home', pathMatch: 'full'},
  {path: 'home' ,component: HomeComponent},
  {path: 'process' ,component: ProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProcessComponent];