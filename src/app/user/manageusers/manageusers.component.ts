import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../../shared/rest-api.service";

@Component({
  selector: 'manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

    users: any = [];

    constructor(public restApi: RestApiService,
                public router: Router) {

    }

    ngOnInit() {

        this.restApi.getUsers().subscribe((data: {}) => {
            console.log('Users:' + JSON.stringify(data));
            this.users = data;
        });
    }

    deleteUser(id_user) {
        if (window.confirm('Voulez-vous vraiment supprimer cet utilisateur? ')) {
            this.restApi.deleteuser(id_user).subscribe(data => {

            })
        }

    }
}
