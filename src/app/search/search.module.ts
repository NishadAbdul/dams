import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { HomeComponent } from './home/home.component';


const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false
  }
};

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchRoutingModule,
    MaterialModule,
    CoreModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    PdfJsViewerModule,
    SharedModule
  ],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    provideNgxMask(maskConfigFunction)
  ]
})
export class SearchModule { }
