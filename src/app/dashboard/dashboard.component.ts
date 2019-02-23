import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUserSubscription: Subscription;
  currentUser: User;
  users: User[] = []
   
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }  

  loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

  deleteUser (){
    alert('Pos los momentos no podemos elimiar data¡')
  }


}