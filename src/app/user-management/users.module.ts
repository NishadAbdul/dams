import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './users-list/userlist.component';
import { ManageUserComponent } from './manage-users/manage-user.component';


@NgModule({
  declarations: [
    UserListComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    UsersRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
