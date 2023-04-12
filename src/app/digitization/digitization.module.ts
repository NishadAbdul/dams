import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { UsersRoutingModule } from './digitization-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataEntryListComponent } from './data-entry-list/data-entry-list.component';
import { ManageDataEntryComponent } from './manage-data-entry/manage-data-entry.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import { UserDefinedDataComponent } from './user-defined-data/user-defined-data.component';


@NgModule({
  declarations: [
    DataEntryListComponent,
    ManageDataEntryComponent,
    DynamicFieldsComponent,
    UserDefinedDataComponent
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
export class DigitizationModule { }
