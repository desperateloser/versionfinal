import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../shared/rest-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(public restApi: RestApiService,
              public router: Router) { }



  ngOnInit() {

    this.restApi.getUsers().subscribe((data: {}) => {
      console.log('Users:' + JSON.stringify(data));
      this.users = data;
    });
  }

}
