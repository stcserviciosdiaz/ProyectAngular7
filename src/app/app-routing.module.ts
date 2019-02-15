import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component"
import { AuthGuard } from "./_guards";

const routes: Routes = [
  // {
  //   path: '', component: HomeComponent,
  //   children: [
  //     { path: 'register', component: RegisterComponent }
  //   ]
  // }
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //{ path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
  // { path: '',   redirectTo: '/register', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  //imports: [RouterModule.forChild(routes)],
})
//export const routing = RouterModule.forRoot(routes);
export class AppRoutingModule {}
