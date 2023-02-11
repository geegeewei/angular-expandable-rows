import { Component, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

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
  columnsToDisplay = ['No', 'Channel', 'Action'];
  expandedElement: Element;
  conditions: Condition;
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
  Channel: string;
  No: number;
  weight: number;
  symbol: string;
}

export interface Condition {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: Element[] = [
  {
    No: 1,
    Channel: 'Free SMS',
    weight: 1.0079,
    symbol: 'H',
  },
  {
    No: 2,
    Channel: 'LINE BC',
    weight: 4.0026,
    symbol: 'He',
  },
  {
    No: 3,
    Channel: 'LINE AOA',
    weight: 6.941,
    symbol: 'Li',
  },
  {
    No: 4,
    Channel: 'Email',
    weight: 9.0122,
    symbol: 'Be',
  },
  // {
  //   No: 5,
  //   Channel: 'Paid SMS',
  //   weight: 10.811,
  //   symbol: 'B',
  // },
  // { No: 6, Channel: 'HomeBank PUSH', weight: 12.0107, symbol: 'C' },
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

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
