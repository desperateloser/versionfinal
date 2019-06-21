import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../../shared/rest-api.service";



@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
	
	@Input() user = {
						};
						
 constructor(public restApi: RestApiService,
			public router: Router) 
	{
		
	 }

  ngOnInit() {
  }
  
  createuser(user) {
	// console.log('send update');
	this.restApi.createuser(user).subscribe((data: {}) => {
	this.router.navigate(['/manageusers'])
	});
  }
}
