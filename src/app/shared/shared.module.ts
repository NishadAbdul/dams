import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DisableCopyPasteDirective } from "./directives/disableCopyPaste.directive";
import { DamsOnEnterDirective } from './directives/dams-enter.directive';



@NgModule({
  declarations: [
    DisableCopyPasteDirective,
    DamsOnEnterDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    DisableCopyPasteDirective,
    DamsOnEnterDirective
  ]
})
export class SharedModule { }
