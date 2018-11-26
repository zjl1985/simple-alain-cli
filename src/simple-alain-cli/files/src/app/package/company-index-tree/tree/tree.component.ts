import { Component, OnInit } from '@angular/core';
import {TreeService} from '../tree.service'
@Component({
  selector: 'company-index-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {

  title:string='hello tree';
  constructor(
    private treeService:TreeService
  ) { }

  ngOnInit() {
    this.treeService.setValue(this);
    // this.title=this.treeService.getValue();
  }

}
