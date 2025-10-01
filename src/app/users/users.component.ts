import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  message: string = "Users Loading ..."

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    // this.users = [
    //   { userId: 1, name: 'John Doe', username: 'johndoe', email: 'john.doe@example.com' },
    //   { userId: 2, name: 'Jane Smith', username: 'janesmith', email: 'jane.smith@example.com' },
    //   { userId: 3, name: 'Mike Johnson', username: 'mikejohnson', email: 'mike.johnson@example.com' }
    // ];

    this.userService.getUsers().subscribe((response) => {
      this.users = response as User[];
    },
      (error) => {
        this.message = error.message;
      }


    );
  }


}

