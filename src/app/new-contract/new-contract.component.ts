import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';


const ColumnsNames = ['No', 'Room Type', 'Room Rate', 'Max Adults/Room' , 'No. of Rooms'];

export interface Rooms {
  maxAdults: number;
  roomRate: number;
  noOfRooms: number;
  roomType: string;
}


// tslint:disable-next-line: one-variable-per-declaration
const dataset: Rooms [] = [];

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})


export class NewContractComponent implements OnInit {
  displayedColumns = ['roomType', 'roomRate', 'maxAdults', 'noOfRooms'];
  dataSource = new MatTableDataSource<Rooms>(dataset);

  public roomType = '';
  public roomRate = '';
  public noOfRooms = '';
  public maxAdults = '';

  ngOnInit() {
  }

  addData() {
    let data = dataset;
    let entry = {
      roomType: this.roomType,
// tslint:disable-next-line: radix
      roomRate: parseInt(this.roomRate),
// tslint:disable-next-line: radix
      maxAdults: parseInt(this.maxAdults),
// tslint:disable-next-line: radix
      noOfRooms: parseInt(this.noOfRooms),
    }
    data.push(entry);
    this.dataSource = new MatTableDataSource<Rooms>(data);;

    console.log(this.dataSource.data)
  }
}
