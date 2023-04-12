import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssemblyListComponent } from './assembly-list/assembly-list.component';
import { ManageAssemblyComponent } from './manage-assembly/manage-assembly.component';
import { SessionTypeListComponent } from './session-type-list/session-type-list.component';
import { ManageSessionTypeComponent } from './manage-session-type/manage-session-type.component';
import { SessionMgmntListComponent } from './session-mgmnt-list/session-mgmnt-list.component';
import { ManageSessionMgmntComponent } from './manage-session-mgmnt/manage-session-mgmnt.component';

const routes: Routes = [
  { path: '', redirectTo: 'assembly-list', pathMatch: 'full'},
  { path: 'assembly-list', component: AssemblyListComponent},
  { path: 'manage-assembly', component: ManageAssemblyComponent},
  { path: 'session-types', component: SessionTypeListComponent},
  { path: 'manage-session-type', component: ManageSessionTypeComponent},
  { path: 'session-management', component: SessionMgmntListComponent},
  { path: 'manage-session-mgmnt', component: ManageSessionMgmntComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }