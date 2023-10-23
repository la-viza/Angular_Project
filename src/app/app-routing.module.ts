import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BreakfastDetailsComponent } from './components/breakfast-details/breakfast-details.component';


const routes: Routes = [
  {path: 'breakfasts', component: BreakfastComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'breakfast/:name', component: BreakfastDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
