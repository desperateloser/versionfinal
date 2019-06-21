import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  id_user = this.actRoute.snapshot.params['id_user'];
  user: any = {};
  constructor(
      public restApi: RestApiService,
      public actRoute: ActivatedRoute,
      public router: Router)
  {

  }
  ngOnInit() {
    this.restApi.getUser(this.id_user).subscribe ((data:{})=>{this.id_user=data;})

  }
// Update user
  updateUser() {
    if (window.confirm('Voulez-vous vraiement modifier cet utilisateur?')) {
      this.restApi.updateUser(this.id_user, this.user).subscribe(data => {
        this.router.navigate(['/manageusers'])
      })

    }
  }
}
