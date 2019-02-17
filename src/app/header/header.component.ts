import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';

import { Subscription } from 'rxjs';
import { User } from '../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  currentUserSubscription: Subscription;
  currentUser: User;
  users: User[] = []

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  } 

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
