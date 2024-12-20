import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Default route (homepage)
  // Signup route
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  // Login URL Component
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  // User Dashboard Component
  {
    path: 'userdashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



