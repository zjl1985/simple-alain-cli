import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { DemoRoutingModule } from './demo-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent]
})
export class DemoModule { }
