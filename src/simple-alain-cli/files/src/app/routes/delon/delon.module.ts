import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ZipComponent } from './zip/zip.component';


const COMPONENT = [
  ZipComponent
];

const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [...COMPONENT, ...COMPONENT_NOROUNT],
  entryComponents: COMPONENT_NOROUNT,
})
export class DelonModule {}
