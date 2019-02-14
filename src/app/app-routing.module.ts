import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component"
//import { AuthGuard } from "./_guards";

const routes: Routes = [
  // {
  //   path: '', component: HomeComponent,
  //   children: [
  //     { path: 'register', component: RegisterComponent }
  //   ]
  // }
  {
    path: "",
    component: HomeComponent //canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '**', redirectTo: '' }
  // { path: '',   redirectTo: '/register', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
//export const routing = RouterModule.forRoot(routes);
export class AppRoutingModule {}
