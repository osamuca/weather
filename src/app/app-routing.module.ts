import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CapitalsComponent } from './capitals/capitals.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'capitals', component: CapitalsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
