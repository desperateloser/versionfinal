import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ManageusersComponent } from '../../user/manageusers/manageusers.component';
import { UsersComponent } from '../../user/users/users.component';
import { RequestComponent } from '../../request/request.component';
import { DocumentsComponent } from '../../documents/documents.component';
import {EdituserComponent} from "../../user/edituser/edituser.component";
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {AdduserComponent} from "../../user/adduser/adduser.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
      AdduserComponent,
      EdituserComponent,
    //  FeedbackComponent,
    HomeComponent,
    UserProfileComponent,
    ManageusersComponent,
      UsersComponent,
    RequestComponent,
    DocumentsComponent,
  ]
})

export class AdminLayoutModule {}
