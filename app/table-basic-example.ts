import { Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {FormControl} from '@angular/forms';
/**
 * @title Basic table
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableBasicExample {
  dataSource = new MatTableDataSource(ELEMENT_DATA.slice());
  columnsToDisplay = ['No', 'Channel','MasterTemplateId', 'MasterTemplateName'];
  expandedElement: Element;
  conditions: Condition;
  toppings1 = new FormControl();
  toppings2= new FormControl();
  toppingList: string[] = ['8710-LINE PAY', '8711-LINE PAY', '8712-LINE PAY', '8713-LINE PAY', '8714-LINE PAY', '8715-LINE PAY', '8716-LINE PAY', '8717-LINE PAY', 
  '8718-LINE PAY', '8719-LINE PAY', '8720-LINE PAY', '8538-華航' ,  '8539-華航',  '8108- 101 聯名卡' ,  '8128- 101 聯名卡' ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  myFunc = (i: number, row: Object) => {
    console.log(row.hasOwnProperty('No'));
    row.hasOwnProperty('position');
  };

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  MasterTemplateName: string;
  No: number;
  weight: number;
  Channel: string;
  MasterTemplateId: string;
}

export interface Condition {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: Element[] = [
  // {
  //   No: 0,
  //   Rule: '預設模板',
  //   weight: 1.0079,
  //   symbol: 'H',
  // },
  {
    No: 1,
    MasterTemplateName: '國內有商店資訊之購貨交易',
    weight: 1.0079,
    Channel: 'LINE BC',
    MasterTemplateId: 'C_JC_01'
  },
  {
    No: 2,
    MasterTemplateName: '國內無商店資訊之購貨交易',
    weight: 1.0079,
    Channel: 'LINE BC',
    MasterTemplateId: 'C_JC_02'
  },
  {
    No: 3,
    MasterTemplateName: '鼎鈦御國內免費簡訊樣版',
    weight: 1.0079,
    Channel: 'Free SMS',
    MasterTemplateId: 'TP1'
  },
  {
    No:4,
    MasterTemplateName: '鼎鈦御國外免費簡訊樣版',
    weight: 1.0079,
    Channel: 'Free SMS',
    MasterTemplateId: 'TP3'
  },
  {
    No: 5,
    MasterTemplateName: '取消交易付費簡訊樣版',
    weight: 1.0079,
    Channel: 'Paid SMS',
    MasterTemplateId: 'MG3'
  },
  // {
  //   No: 2,
  //   Rule: 'LINE PAY-國內無商店資訊之購貨交易',
  //   weight: 4.0026,
  //   symbol: 'He',
  // },
  // {
  //   No: 3,
  //   Rule: 'LINE PAY-外之購貨交易',
  //   weight: 1.0079,
  //   symbol: 'H',
  // },
  // {
  //   No: 4,
  //   Rule: '101 聯名卡-國內有商店資訊之購貨交易',
  //   weight: 4.0026,
  //   symbol: 'He',
  // },
  // {
  //   No: 5,
  //   Rule: '101 聯名卡-國內無商店資訊之購貨交易',
  //   weight: 1.0079,
  //   symbol: 'H',
  // },
  // {
  //   No: 6,
  //   Rule: '101 聯名卡-國外之購貨交易',
  //   weight: 4.0026,
  //   symbol: 'He',
  // },
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

const conditions: Condition[] = [
  {
    value: '1',
    viewValue:
      'Global notification threshold for domestic/foreign transaction amount',
  },
  { value: '2', viewValue: 'Excess percentage of credit limit' },
  { value: '3', viewValue: 'Transaction of Specific Product Name' },
];
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
