import { Reply } from './../new-contract/new-contract.component';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as _  from 'lodash';


export interface Request {

    startDate: String;
    endDate: String;
    roomRequestList: ReqTable[]
}

export interface ReqTable {
    rooms: number,
    maxAdults: number
}

export interface Reply {
  hotelName:String;
  roomType:String;
  roomRate:number;
  price:number;
}




const dataset:any[] = [];


@Component({
  selector: 'app-search-rooms',
  templateUrl: './search-rooms.component.html',
  styleUrls: ['./search-rooms.component.css']
})
export class SearchRoomsComponent implements OnInit {
  displayedColumns = ['hotelName', 'roomType', 'price'];
  displayedCols = ['rooms', 'adults'];
  //dataSource = new MatTableDataSource([{"hotelName":"wer","roomType":"sdfs","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"sdfs","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"sdfs","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"sdfs","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"YAHOOOOOOOOOOO","roomType":"DANDA","roomRate":3223.0},{"hotelName":"dfsf","roomType":"sdfs","roomRate":3223.0},{"hotelName":"dfsf","roomType":"sdfs","roomRate":324.0},{"hotelName":"dfsf","roomType":"dwd","roomRate":3223.0},{"hotelName":"weq","roomType":"q","roomRate":2.0}]);
  datatbl = new MatTableDataSource(dataset);
  public datasource;
  reqData: ReqTable[];
  public rdata=dataset;
  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this.datasource= new MatTableDataSource(dataset);
  }

  public startDate: Date;
  public endDate: Date;
  public adults:number;
  public searchrequest: Request;
  public data:any[];
  public noOfRooms: number;
  public finalData;
  changedate(date: Date) {
    let year = date.getFullYear();
    let month = (date.getMonth()+1).toFixed();
    let day = date.getDate().toFixed();

      if (parseInt (day) < 10) {
        day = '0' + day;
      }
      if (parseInt (month) < 10) {
        month = '0' + month;
      }
    return year+'-' + month + '-'+day;
  }

  calnight(start: Date, end:Date){
    return end.getDate() - start.getDate();
  }

  resetData() {
    this.rdata = [];
    this.datatbl = new MatTableDataSource<ReqTable[]>();
    console.log(this.rdata)
  }

  addData() {

    let entry: ReqTable = {
      rooms: this.noOfRooms,
      maxAdults: this.adults
    }

    this.rdata.push(entry);

    this.datatbl = new MatTableDataSource<ReqTable[]>(this.rdata);
    this.reqData = this.rdata;
  }


  find(){
    let nights = this.calnight(this.startDate,this.endDate);
    let noOfadults=0;
     for (let index = 0; index < this.reqData.length; index++) {
      noOfadults += this.reqData[index].maxAdults*this.reqData[index].rooms;

    }
    let payload: Request = {
      startDate:this.changedate(this.startDate),
      endDate: this.changedate(this.endDate),
      roomRequestList : this.reqData
    }

    this._searchService.search( payload)
    .subscribe (data => {

      console.log(data)
      console.log(noOfadults,nights)
      const datas = _.map(data ,x =>{
        return _.assign (x,x, {price: Math.round(parseInt(x["roomRate"])*(noOfadults)*nights*1.15)})
      })
      console.log(datas)
      console.log(this.datasource)
      this.datasource = new MatTableDataSource(datas)
      console.log(this.datasource)
    }
    )




  }


}
