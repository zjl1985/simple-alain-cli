import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {GaoXinTreeComponent} from "./gao-xin-tree/gao-xin-tree.component";
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, HttpClientModule,
    ReactiveFormsModule, NgZorroAntdModule
  ],
  declarations: [GaoXinTreeComponent],
  exports: [GaoXinTreeComponent],
})

export class GaoXinTreeModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: GaoXinTreeModule, providers: []};
  }
}
