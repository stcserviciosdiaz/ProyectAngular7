import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./user/register/register.component";

const routes: Routes = [
  // {
  //   path: '', component: HomeComponent,
  //   children: [
  //     { path: 'register', component: RegisterComponent }
  //   ]
  // }
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
  // { path: '',   redirectTo: '/register', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
