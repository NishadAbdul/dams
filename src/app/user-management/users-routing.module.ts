import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users-list/userlist.component';
import { ManageUserComponent } from './manage-users/manage-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'allusers', pathMatch: 'full'},
  { path: 'manage-user', component: ManageUserComponent},
  { path: 'allusers', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }