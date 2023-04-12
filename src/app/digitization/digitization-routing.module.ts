import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDataEntryComponent } from './manage-data-entry/manage-data-entry.component';
import { DataEntryListComponent } from './data-entry-list/data-entry-list.component';
import { UserDefinedDataComponent } from './user-defined-data/user-defined-data.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-entry-list', pathMatch: 'full'},
  { path: 'data-entry-list', component: DataEntryListComponent},
  { path: 'manage-data-entry', component: ManageDataEntryComponent},
  { path: 'user-defined', component: UserDefinedDataComponent},
  { path: 'dynamic-fields', component: DynamicFieldsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }