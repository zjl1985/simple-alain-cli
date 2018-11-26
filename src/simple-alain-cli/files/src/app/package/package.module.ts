import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CompanyIndexTreeModule} from './company-index-tree';
import {GaoXinTreeModule} from "./gao-xin-tree";

export * from './company-index-tree';
export * from './gao-xin-tree';

const MYMODULES = [
  CompanyIndexTreeModule,
  GaoXinTreeModule
];

@NgModule({
  imports: [
    CommonModule,
    CompanyIndexTreeModule.forRoot(),
    GaoXinTreeModule.forRoot(),
  ],
  exports: [
    MYMODULES
  ]
})

export class PackageRootModule { }

@NgModule({ exports: MYMODULES })
export class PackageModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: PackageRootModule };
  }
}
