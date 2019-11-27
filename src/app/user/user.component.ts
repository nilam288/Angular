import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) {

  }
/*
  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users= data;
      });
  };
  */

ngOnInit() {
 // this.userService.getUsers();
 this.userService.getUsers()
 .subscribe((data: User[]) => {
   this.users = data;
   alert('Login');
   console.log('dkjgkfjg');
  });
}

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

}
