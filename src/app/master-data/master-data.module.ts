import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblyListComponent } from './assembly-list/assembly-list.component';
import { ManageAssemblyComponent } from './manage-assembly/manage-assembly.component';
import { SessionTypeListComponent } from './session-type-list/session-type-list.component';
import { ManageSessionTypeComponent } from './manage-session-type/manage-session-type.component';
import { SessionMgmntListComponent } from './session-mgmnt-list/session-mgmnt-list.component';
import { ManageSessionMgmntComponent } from './manage-session-mgmnt/manage-session-mgmnt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { MasterDataRoutingModule } from './master-data-routing.module';



@NgModule({
  declarations: [
    AssemblyListComponent,
    ManageAssemblyComponent,
    SessionTypeListComponent,
    ManageSessionTypeComponent,
    SessionMgmntListComponent,
    ManageSessionMgmntComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    MasterDataRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterDataModule { }
