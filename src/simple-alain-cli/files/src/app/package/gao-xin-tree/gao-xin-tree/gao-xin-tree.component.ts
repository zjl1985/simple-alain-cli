import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from 'ng-zorro-antd';
import {GaoXinTreeService} from "../gao-xin-tree.service";

@Component({
  selector: 'gao-xin-tree',
  templateUrl: './gao-xin-tree.component.html',
  styleUrls: ['./gao-xin-tree.component.less']
})
export class GaoXinTreeComponent implements OnInit {
  /**
   * 选中节点事件 向父组件发送选中node
   */
  @Output() nodeSelected = new EventEmitter();
  /**
   * 后台接口url
   */
  @Input() treeUrl = '待定';

  /**
   * 是否支持搜索功能
   */
  @Input() supportSearch = false;

  /**
   * 默认展开node的key
   */
  defaultExpandedKeys: string[] = [];
  /**
   * 默认选中node的key
   */
  defaultSelectedKeys: string[] = [];
  /**
   *异步加载
   */
  @Input() asyncData: false;
  /**
   * 多选
   */
  @Input() multiple: false;

  @ViewChild('gaoxinTree') gaoxinTree: NzTreeComponent;

  searchValue;
  showSearch: string = 'hide';
  nodes: NzTreeNode[]=[];
  originNodes: NzTreeNodeOptions[]=[];
  
  constructor(private treeService: GaoXinTreeService) {
  }

  ngOnInit(): void {
    this.initProcessUnitTree();
  }

  /* 将数据转换成NzTreeNode */
  buildNzTreeNode(data: any): NzTreeNode[] {
    const nodes: NzTreeNode[] = [];
    (this.originNodes).forEach(element => {
      nodes.push(new NzTreeNode(element));
    });
    return nodes;
  }

  mouseChange(click: string, event: NzFormatEmitEvent): void {
    //子组件向父组件发送消息--选中
    this.nodeSelected.emit(event.node);
  }

  private initProcessUnitTree(): void {
    this.treeService.getProcessUnitTreeData(this.treeUrl).then((result) => {
      this.originNodes = result as NzTreeNodeOptions[];
      this.nodes = this.buildNzTreeNode(result);
      this.defaultExpandedKeys.push(result[0]['key']);
      this.defaultSelectedKeys.push(result[0]['key']);
      //子组件向父组件发送消息--默认选中
      this.nodeSelected.emit(result[0]);
    });
  }

  /* 设置选中 */
  private rebuildNodeBySelect(selectKey: string[]): NzTreeNodeOptions[] {
    const treeNodes: NzTreeNodeOptions[] = [...this.originNodes];
    this.setSelectNodes(treeNodes, selectKey);
    return treeNodes;
  }

  /* 递归设置选中 */
  private setSelectNodes(nodes: NzTreeNodeOptions[], selectKey: string[]) {
    for (const node of nodes) {
      if (selectKey.indexOf(node.key) > -1) {
        node.selected = true;
      }
      if (node.children && node.children.length > 0) {
        this.setSelectNodes(node.children, selectKey);
      }
    }
  }

  selectNode(key: string): void {
    const treeNodes: NzTreeNodeOptions[] = this.rebuildNodeBySelect([key]);
    this.nodes = this.buildNzTreeNode(treeNodes);
    this.defaultSelectedKeys = [key];
  }
}

