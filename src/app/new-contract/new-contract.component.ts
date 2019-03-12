import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ContractService } from '../contract.service';


const ColumnsNames = ['No', 'Room Type', 'Room Rate', 'Max Adults/Room' , 'No. of Rooms'];

export interface Rooms {
  maxAdults: number;
  roomRate: number;
  noOfRooms: number;
  roomType: string;
}

export interface Reply {
  id: number;
  startDate: string;
  endDate: string;
  rooms: Rooms;
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
  public startDate = '';
  public endDate = '';
  public name = '';
  public address = '';

  constructor(private _contractService: ContractService){}
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

    // console.log(this.dataSource.data)
  }

  onSubmit() {
    const payload = {
      startDate: this.startDate,
      endDate: this.endDate,
      hotel: {
        address: this.address,
        name: this.name
      },
    rooms: this.dataSource.data
    };
// tslint:disable-next-line: arrow-return-shorthand
    this._contractService.createContract(payload).subscribe(reply => {
      console.log(reply);
      if (reply.id != null) { alert('Data Added'); }
    });


  }

}
