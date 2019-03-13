import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as _  from 'lodash';

export interface Request {
    adults: number;
    startDate: Date;
    endDate: Date;

}

const dataset:any[] = [];

@Component({
  selector: 'app-search-rooms',
  templateUrl: './search-rooms.component.html',
  styleUrls: ['./search-rooms.component.css']
})
export class SearchRoomsComponent implements OnInit {
  displayedColumns = ['hotelname', 'roomType', 'price'];
  dataSource = new MatTableDataSource(dataset);
  constructor(private _searchService: SearchService) { }

  ngOnInit() {
  }

  public startDate: Date;
  public endDate: Date;
  public adults = '';
  public data:any[];
  changedate(date: Date) {
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();

      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }
    return year+'-' + month + '-'+day;
  }

  calnight(start: Date, end:Date){
    return end.getDate() - start.getDate();
  }

  find(){
    let v = this.changedate(this.startDate);
    console.log(v);
    this._searchService.search(this.adults,this.changedate(this.startDate),this.changedate(this.endDate))
    .subscribe (data => {

      console.log(data)
      let nights = this.calnight(this.startDate,this.endDate);
    const datas = _.map(data, element => {
       return {
          hotelName: element[0],
          roomType: element[1].toString(),
          price:  parseFloat(element[2])*parseInt(this.adults)*nights*0.1
       }
      })
      console.log(datas);
      this.dataSource = new MatTableDataSource(datas);
    })




  }


}
