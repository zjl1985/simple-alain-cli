import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeComponent],
  exports:[TreeComponent]
})
export class CompanyIndexTreeModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CompanyIndexTreeModule, providers: [] };
  }
 }
